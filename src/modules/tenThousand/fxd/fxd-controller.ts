import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fxd")
export default class FxdController {
  @operation({
    summary: "Get Fxd",
  })
  @get()
  static getFxd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fxd",
  })
  @post("{id}")
  static createFxd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
