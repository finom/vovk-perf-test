import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eqh")
export default class EqhController {
  @operation({
    summary: "Get Eqh",
  })
  @get()
  static getEqh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eqh",
  })
  @post("{id}")
  static createEqh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
