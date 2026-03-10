import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("etv")
export default class EtvController {
  @operation({
    summary: "Get Etv",
  })
  @get()
  static getEtv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Etv",
  })
  @post("{id}")
  static createEtv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
