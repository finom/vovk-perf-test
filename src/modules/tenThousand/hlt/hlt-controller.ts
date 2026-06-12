import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hlt")
export default class HltController {
  @operation({
    summary: "Get Hlt",
  })
  @get()
  static getHlt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hlt",
  })
  @post("{id}")
  static createHlt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
