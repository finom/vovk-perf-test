import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("yl")
export default class YlController {
  @operation({
    summary: "Get Yl",
  })
  @get()
  static getYl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Yl",
  })
  @post("{id}")
  static createYl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
