import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eab")
export default class EabController {
  @operation({
    summary: "Get Eab",
  })
  @get()
  static getEab = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eab",
  })
  @post("{id}")
  static createEab = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
