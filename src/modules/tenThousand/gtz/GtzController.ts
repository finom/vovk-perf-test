import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gtz")
export default class GtzController {
  @operation({
    summary: "Get Gtz",
  })
  @get()
  static getGtz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gtz",
  })
  @post("{id}")
  static createGtz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
