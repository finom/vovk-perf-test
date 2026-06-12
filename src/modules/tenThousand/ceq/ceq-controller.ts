import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ceq")
export default class CeqController {
  @operation({
    summary: "Get Ceq",
  })
  @get()
  static getCeq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ceq",
  })
  @post("{id}")
  static createCeq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
