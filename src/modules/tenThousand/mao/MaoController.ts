import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mao")
export default class MaoController {
  @operation({
    summary: "Get Mao",
  })
  @get()
  static getMao = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mao",
  })
  @post("{id}")
  static createMao = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
