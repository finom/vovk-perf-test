import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("llu")
export default class LluController {
  @operation({
    summary: "Get Llu",
  })
  @get()
  static getLlu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Llu",
  })
  @post("{id}")
  static createLlu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
