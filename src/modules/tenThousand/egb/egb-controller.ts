import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("egb")
export default class EgbController {
  @operation({
    summary: "Get Egb",
  })
  @get()
  static getEgb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Egb",
  })
  @post("{id}")
  static createEgb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
