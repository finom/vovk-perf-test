import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jvs")
export default class JvsController {
  @operation({
    summary: "Get Jvs",
  })
  @get()
  static getJvs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jvs",
  })
  @post("{id}")
  static createJvs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
