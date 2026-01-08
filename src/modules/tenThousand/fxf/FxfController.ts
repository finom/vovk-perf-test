import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fxf")
export default class FxfController {
  @operation({
    summary: "Get Fxf",
  })
  @get()
  static getFxf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxf",
  })
  @post("{id}")
  static createFxf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
