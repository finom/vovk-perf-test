import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kcw")
export default class KcwController {
  @operation({
    summary: "Get Kcw",
  })
  @get()
  static getKcw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kcw",
  })
  @post("{id}")
  static createKcw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
