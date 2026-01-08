import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mnn")
export default class MnnController {
  @operation({
    summary: "Get Mnn",
  })
  @get()
  static getMnn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnn",
  })
  @post("{id}")
  static createMnn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
