import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ksa")
export default class KsaController {
  @operation({
    summary: "Get Ksa",
  })
  @get()
  static getKsa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ksa",
  })
  @post("{id}")
  static createKsa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
