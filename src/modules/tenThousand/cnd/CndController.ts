import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cnd")
export default class CndController {
  @operation({
    summary: "Get Cnd",
  })
  @get()
  static getCnd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnd",
  })
  @post("{id}")
  static createCnd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
