import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gzd")
export default class GzdController {
  @operation({
    summary: "Get Gzd",
  })
  @get()
  static getGzd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gzd",
  })
  @post("{id}")
  static createGzd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
