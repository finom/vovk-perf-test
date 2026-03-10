import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("en")
export default class EnController {
  @operation({
    summary: "Get En",
  })
  @get()
  static getEn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create En",
  })
  @post("{id}")
  static createEn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
