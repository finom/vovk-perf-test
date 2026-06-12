import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mrb")
export default class MrbController {
  @operation({
    summary: "Get Mrb",
  })
  @get()
  static getMrb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mrb",
  })
  @post("{id}")
  static createMrb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
