import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("evu")
export default class EvuController {
  @operation({
    summary: "Get Evu",
  })
  @get()
  static getEvu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Evu",
  })
  @post("{id}")
  static createEvu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
