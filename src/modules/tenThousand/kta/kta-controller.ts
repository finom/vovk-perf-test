import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kta")
export default class KtaController {
  @operation({
    summary: "Get Kta",
  })
  @get()
  static getKta = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kta",
  })
  @post("{id}")
  static createKta = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
