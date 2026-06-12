import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fxk")
export default class FxkController {
  @operation({
    summary: "Get Fxk",
  })
  @get()
  static getFxk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fxk",
  })
  @post("{id}")
  static createFxk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
