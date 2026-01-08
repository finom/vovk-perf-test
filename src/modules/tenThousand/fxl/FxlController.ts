import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fxl")
export default class FxlController {
  @operation({
    summary: "Get Fxl",
  })
  @get()
  static getFxl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxl",
  })
  @post("{id}")
  static createFxl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
