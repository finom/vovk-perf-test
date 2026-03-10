import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jvt")
export default class JvtController {
  @operation({
    summary: "Get Jvt",
  })
  @get()
  static getJvt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jvt",
  })
  @post("{id}")
  static createJvt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
