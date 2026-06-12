import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jdm")
export default class JdmController {
  @operation({
    summary: "Get Jdm",
  })
  @get()
  static getJdm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jdm",
  })
  @post("{id}")
  static createJdm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
