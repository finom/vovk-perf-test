import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lcc")
export default class LccController {
  @operation({
    summary: "Get Lcc",
  })
  @get()
  static getLcc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcc",
  })
  @post("{id}")
  static createLcc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
