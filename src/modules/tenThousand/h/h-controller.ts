import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("h")
export default class HController {
  @operation({
    summary: "Get H",
  })
  @get()
  static getH = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create H",
  })
  @post("{id}")
  static createH = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
