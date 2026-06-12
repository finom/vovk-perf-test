import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("uv")
export default class UvController {
  @operation({
    summary: "Get Uv",
  })
  @get()
  static getUv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Uv",
  })
  @post("{id}")
  static createUv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
