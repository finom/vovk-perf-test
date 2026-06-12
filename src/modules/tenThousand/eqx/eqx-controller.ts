import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eqx")
export default class EqxController {
  @operation({
    summary: "Get Eqx",
  })
  @get()
  static getEqx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eqx",
  })
  @post("{id}")
  static createEqx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
