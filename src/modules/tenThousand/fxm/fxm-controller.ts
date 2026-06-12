import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fxm")
export default class FxmController {
  @operation({
    summary: "Get Fxm",
  })
  @get()
  static getFxm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fxm",
  })
  @post("{id}")
  static createFxm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
