import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mku")
export default class MkuController {
  @operation({
    summary: "Get Mku",
  })
  @get()
  static getMku = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mku",
  })
  @post("{id}")
  static createMku = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
