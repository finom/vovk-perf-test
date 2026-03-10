import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eaf")
export default class EafController {
  @operation({
    summary: "Get Eaf",
  })
  @get()
  static getEaf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eaf",
  })
  @post("{id}")
  static createEaf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
