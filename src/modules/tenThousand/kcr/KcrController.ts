import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kcr")
export default class KcrController {
  @operation({
    summary: "Get Kcr",
  })
  @get()
  static getKcr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kcr",
  })
  @post("{id}")
  static createKcr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
