import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jdr")
export default class JdrController {
  @operation({
    summary: "Get Jdr",
  })
  @get()
  static getJdr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jdr",
  })
  @post("{id}")
  static createJdr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
