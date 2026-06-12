import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fxc")
export default class FxcController {
  @operation({
    summary: "Get Fxc",
  })
  @get()
  static getFxc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fxc",
  })
  @post("{id}")
  static createFxc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
