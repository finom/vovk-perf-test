import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("env")
export default class EnvController {
  @operation({
    summary: "Get Env",
  })
  @get()
  static getEnv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Env",
  })
  @post("{id}")
  static createEnv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
