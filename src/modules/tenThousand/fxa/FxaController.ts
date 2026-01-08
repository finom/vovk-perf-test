import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fxa")
export default class FxaController {
  @operation({
    summary: "Get Fxa",
  })
  @get()
  static getFxa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxa",
  })
  @post("{id}")
  static createFxa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
