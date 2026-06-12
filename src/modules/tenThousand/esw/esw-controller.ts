import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("esw")
export default class EswController {
  @operation({
    summary: "Get Esw",
  })
  @get()
  static getEsw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Esw",
  })
  @post("{id}")
  static createEsw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
