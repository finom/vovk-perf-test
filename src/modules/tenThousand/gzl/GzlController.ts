import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gzl")
export default class GzlController {
  @operation({
    summary: "Get Gzl",
  })
  @get()
  static getGzl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gzl",
  })
  @post("{id}")
  static createGzl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
