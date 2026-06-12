import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eji")
export default class EjiController {
  @operation({
    summary: "Get Eji",
  })
  @get()
  static getEji = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eji",
  })
  @post("{id}")
  static createEji = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
