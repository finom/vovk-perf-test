import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kcz")
export default class KczController {
  @operation({
    summary: "Get Kcz",
  })
  @get()
  static getKcz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kcz",
  })
  @post("{id}")
  static createKcz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
