import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("yy")
export default class YyController {
  @operation({
    summary: "Get Yy",
  })
  @get()
  static getYy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Yy",
  })
  @post("{id}")
  static createYy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
