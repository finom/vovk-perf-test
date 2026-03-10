import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ibt")
export default class IbtController {
  @operation({
    summary: "Get Ibt",
  })
  @get()
  static getIbt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ibt",
  })
  @post("{id}")
  static createIbt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
