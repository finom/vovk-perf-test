import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eqd")
export default class EqdController {
  @operation({
    summary: "Get Eqd",
  })
  @get()
  static getEqd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eqd",
  })
  @post("{id}")
  static createEqd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
