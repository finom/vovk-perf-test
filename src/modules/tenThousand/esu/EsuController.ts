import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("esu")
export default class EsuController {
  @operation({
    summary: "Get Esu",
  })
  @get()
  static getEsu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Esu",
  })
  @post("{id}")
  static createEsu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
