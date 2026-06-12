import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hsa")
export default class HsaController {
  @operation({
    summary: "Get Hsa",
  })
  @get()
  static getHsa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hsa",
  })
  @post("{id}")
  static createHsa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
