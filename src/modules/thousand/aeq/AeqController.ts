import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aeq")
export default class AeqController {
  @operation({
    summary: "Get Aeq",
  })
  @get()
  static getAeq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aeq",
  })
  @post("{id}")
  static createAeq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
