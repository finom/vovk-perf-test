import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("efa")
export default class EfaController {
  @operation({
    summary: "Get Efa",
  })
  @get()
  static getEfa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Efa",
  })
  @post("{id}")
  static createEfa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
