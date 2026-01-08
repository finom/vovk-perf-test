import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lc")
export default class LcController {
  @operation({
    summary: "Get Lc",
  })
  @get()
  static getLc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lc",
  })
  @post("{id}")
  static createLc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
