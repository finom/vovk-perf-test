import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gzq")
export default class GzqController {
  @operation({
    summary: "Get Gzq",
  })
  @get()
  static getGzq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gzq",
  })
  @post("{id}")
  static createGzq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
