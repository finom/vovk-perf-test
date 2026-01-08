import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lnn")
export default class LnnController {
  @operation({
    summary: "Get Lnn",
  })
  @get()
  static getLnn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnn",
  })
  @post("{id}")
  static createLnn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
