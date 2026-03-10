import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gzv")
export default class GzvController {
  @operation({
    summary: "Get Gzv",
  })
  @get()
  static getGzv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gzv",
  })
  @post("{id}")
  static createGzv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
