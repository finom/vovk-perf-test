import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bao")
export default class BaoController {
  @operation({
    summary: "Get Bao",
  })
  @get()
  static getBao = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bao",
  })
  @post("{id}")
  static createBao = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
