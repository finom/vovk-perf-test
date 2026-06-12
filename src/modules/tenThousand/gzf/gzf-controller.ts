import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gzf")
export default class GzfController {
  @operation({
    summary: "Get Gzf",
  })
  @get()
  static getGzf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gzf",
  })
  @post("{id}")
  static createGzf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
