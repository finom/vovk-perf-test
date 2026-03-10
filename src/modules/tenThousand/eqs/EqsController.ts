import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eqs")
export default class EqsController {
  @operation({
    summary: "Get Eqs",
  })
  @get()
  static getEqs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eqs",
  })
  @post("{id}")
  static createEqs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
