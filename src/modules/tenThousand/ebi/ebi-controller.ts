import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ebi")
export default class EbiController {
  @operation({
    summary: "Get Ebi",
  })
  @get()
  static getEbi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ebi",
  })
  @post("{id}")
  static createEbi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
