import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fxe")
export default class FxeController {
  @operation({
    summary: "Get Fxe",
  })
  @get()
  static getFxe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxe",
  })
  @post("{id}")
  static createFxe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
