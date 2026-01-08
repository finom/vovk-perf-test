import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fku")
export default class FkuController {
  @operation({
    summary: "Get Fku",
  })
  @get()
  static getFku = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fku",
  })
  @post("{id}")
  static createFku = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
