import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eqj")
export default class EqjController {
  @operation({
    summary: "Get Eqj",
  })
  @get()
  static getEqj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eqj",
  })
  @post("{id}")
  static createEqj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
