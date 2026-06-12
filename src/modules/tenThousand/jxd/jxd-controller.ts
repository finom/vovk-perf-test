import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jxd")
export default class JxdController {
  @operation({
    summary: "Get Jxd",
  })
  @get()
  static getJxd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jxd",
  })
  @post("{id}")
  static createJxd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
