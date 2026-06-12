import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gog")
export default class GogController {
  @operation({
    summary: "Get Gog",
  })
  @get()
  static getGog = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gog",
  })
  @post("{id}")
  static createGog = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
