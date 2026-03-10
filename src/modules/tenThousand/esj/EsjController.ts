import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("esj")
export default class EsjController {
  @operation({
    summary: "Get Esj",
  })
  @get()
  static getEsj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Esj",
  })
  @post("{id}")
  static createEsj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
