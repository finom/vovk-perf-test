import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fxp")
export default class FxpController {
  @operation({
    summary: "Get Fxp",
  })
  @get()
  static getFxp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fxp",
  })
  @post("{id}")
  static createFxp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
