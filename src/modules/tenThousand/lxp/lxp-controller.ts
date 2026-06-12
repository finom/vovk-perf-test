import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lxp")
export default class LxpController {
  @operation({
    summary: "Get Lxp",
  })
  @get()
  static getLxp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lxp",
  })
  @post("{id}")
  static createLxp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
