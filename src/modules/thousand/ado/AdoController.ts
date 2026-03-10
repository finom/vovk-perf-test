import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ado")
export default class AdoController {
  @operation({
    summary: "Get Ado",
  })
  @get()
  static getAdo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ado",
  })
  @post("{id}")
  static createAdo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
