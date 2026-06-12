import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kcg")
export default class KcgController {
  @operation({
    summary: "Get Kcg",
  })
  @get()
  static getKcg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kcg",
  })
  @post("{id}")
  static createKcg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
