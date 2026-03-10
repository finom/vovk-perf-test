import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("yi")
export default class YiController {
  @operation({
    summary: "Get Yi",
  })
  @get()
  static getYi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Yi",
  })
  @post("{id}")
  static createYi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
