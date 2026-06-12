import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eqn")
export default class EqnController {
  @operation({
    summary: "Get Eqn",
  })
  @get()
  static getEqn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eqn",
  })
  @post("{id}")
  static createEqn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
