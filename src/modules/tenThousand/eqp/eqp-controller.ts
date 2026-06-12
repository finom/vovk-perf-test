import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eqp")
export default class EqpController {
  @operation({
    summary: "Get Eqp",
  })
  @get()
  static getEqp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eqp",
  })
  @post("{id}")
  static createEqp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
