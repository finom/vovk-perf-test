import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fxu")
export default class FxuController {
  @operation({
    summary: "Get Fxu",
  })
  @get()
  static getFxu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fxu",
  })
  @post("{id}")
  static createFxu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
