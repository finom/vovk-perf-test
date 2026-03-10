import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hao")
export default class HaoController {
  @operation({
    summary: "Get Hao",
  })
  @get()
  static getHao = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hao",
  })
  @post("{id}")
  static createHao = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
