import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gzj")
export default class GzjController {
  @operation({
    summary: "Get Gzj",
  })
  @get()
  static getGzj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gzj",
  })
  @post("{id}")
  static createGzj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
