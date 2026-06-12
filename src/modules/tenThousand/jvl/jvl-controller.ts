import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jvl")
export default class JvlController {
  @operation({
    summary: "Get Jvl",
  })
  @get()
  static getJvl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jvl",
  })
  @post("{id}")
  static createJvl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
