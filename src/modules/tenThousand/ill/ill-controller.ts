import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ill")
export default class IllController {
  @operation({
    summary: "Get Ill",
  })
  @get()
  static getIll = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ill",
  })
  @post("{id}")
  static createIll = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
