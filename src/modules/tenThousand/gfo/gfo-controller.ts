import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gfo")
export default class GfoController {
  @operation({
    summary: "Get Gfo",
  })
  @get()
  static getGfo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gfo",
  })
  @post("{id}")
  static createGfo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
