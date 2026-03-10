import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eqv")
export default class EqvController {
  @operation({
    summary: "Get Eqv",
  })
  @get()
  static getEqv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eqv",
  })
  @post("{id}")
  static createEqv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
