import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ano")
export default class AnoController {
  @operation({
    summary: "Get Ano",
  })
  @get()
  static getAno = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ano",
  })
  @post("{id}")
  static createAno = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
