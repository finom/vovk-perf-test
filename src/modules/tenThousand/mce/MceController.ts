import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mce")
export default class MceController {
  @operation({
    summary: "Get Mce",
  })
  @get()
  static getMce = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mce",
  })
  @post("{id}")
  static createMce = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
