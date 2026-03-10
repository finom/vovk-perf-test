import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jda")
export default class JdaController {
  @operation({
    summary: "Get Jda",
  })
  @get()
  static getJda = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jda",
  })
  @post("{id}")
  static createJda = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
