import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kfn")
export default class KfnController {
  @operation({
    summary: "Get Kfn",
  })
  @get()
  static getKfn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kfn",
  })
  @post("{id}")
  static createKfn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
