import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kpj")
export default class KpjController {
  @operation({
    summary: "Get Kpj",
  })
  @get()
  static getKpj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kpj",
  })
  @post("{id}")
  static createKpj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
