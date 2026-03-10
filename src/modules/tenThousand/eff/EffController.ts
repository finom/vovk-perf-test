import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eff")
export default class EffController {
  @operation({
    summary: "Get Eff",
  })
  @get()
  static getEff = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eff",
  })
  @post("{id}")
  static createEff = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
