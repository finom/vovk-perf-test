import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gzb")
export default class GzbController {
  @operation({
    summary: "Get Gzb",
  })
  @get()
  static getGzb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gzb",
  })
  @post("{id}")
  static createGzb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
