import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("esf")
export default class EsfController {
  @operation({
    summary: "Get Esf",
  })
  @get()
  static getEsf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Esf",
  })
  @post("{id}")
  static createEsf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
