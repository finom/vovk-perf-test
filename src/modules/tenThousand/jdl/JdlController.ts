import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jdl")
export default class JdlController {
  @operation({
    summary: "Get Jdl",
  })
  @get()
  static getJdl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jdl",
  })
  @post("{id}")
  static createJdl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
