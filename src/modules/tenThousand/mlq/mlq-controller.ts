import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mlq")
export default class MlqController {
  @operation({
    summary: "Get Mlq",
  })
  @get()
  static getMlq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mlq",
  })
  @post("{id}")
  static createMlq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
