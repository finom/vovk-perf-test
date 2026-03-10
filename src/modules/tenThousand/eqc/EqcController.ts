import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eqc")
export default class EqcController {
  @operation({
    summary: "Get Eqc",
  })
  @get()
  static getEqc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eqc",
  })
  @post("{id}")
  static createEqc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
