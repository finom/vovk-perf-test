import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gzr")
export default class GzrController {
  @operation({
    summary: "Get Gzr",
  })
  @get()
  static getGzr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gzr",
  })
  @post("{id}")
  static createGzr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
