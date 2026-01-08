import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lhb")
export default class LhbController {
  @operation({
    summary: "Get Lhb",
  })
  @get()
  static getLhb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhb",
  })
  @post("{id}")
  static createLhb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
