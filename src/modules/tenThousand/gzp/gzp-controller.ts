import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gzp")
export default class GzpController {
  @operation({
    summary: "Get Gzp",
  })
  @get()
  static getGzp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gzp",
  })
  @post("{id}")
  static createGzp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
