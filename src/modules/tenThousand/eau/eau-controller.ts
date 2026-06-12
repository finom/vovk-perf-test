import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eau")
export default class EauController {
  @operation({
    summary: "Get Eau",
  })
  @get()
  static getEau = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eau",
  })
  @post("{id}")
  static createEau = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
