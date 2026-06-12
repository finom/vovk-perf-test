import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cog")
export default class CogController {
  @operation({
    summary: "Get Cog",
  })
  @get()
  static getCog = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cog",
  })
  @post("{id}")
  static createCog = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
