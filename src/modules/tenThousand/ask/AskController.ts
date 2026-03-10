import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ask")
export default class AskController {
  @operation({
    summary: "Get Ask",
  })
  @get()
  static getAsk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ask",
  })
  @post("{id}")
  static createAsk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
