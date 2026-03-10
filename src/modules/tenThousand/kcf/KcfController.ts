import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kcf")
export default class KcfController {
  @operation({
    summary: "Get Kcf",
  })
  @get()
  static getKcf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kcf",
  })
  @post("{id}")
  static createKcf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
