import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hpj")
export default class HpjController {
  @operation({
    summary: "Get Hpj",
  })
  @get()
  static getHpj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hpj",
  })
  @post("{id}")
  static createHpj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
