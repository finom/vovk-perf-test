import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("yb")
export default class YbController {
  @operation({
    summary: "Get Yb",
  })
  @get()
  static getYb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Yb",
  })
  @post("{id}")
  static createYb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
