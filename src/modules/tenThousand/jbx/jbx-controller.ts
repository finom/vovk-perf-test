import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jbx")
export default class JbxController {
  @operation({
    summary: "Get Jbx",
  })
  @get()
  static getJbx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jbx",
  })
  @post("{id}")
  static createJbx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
