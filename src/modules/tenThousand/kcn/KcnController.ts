import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kcn")
export default class KcnController {
  @operation({
    summary: "Get Kcn",
  })
  @get()
  static getKcn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kcn",
  })
  @post("{id}")
  static createKcn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
