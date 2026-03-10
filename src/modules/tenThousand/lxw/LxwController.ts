import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lxw")
export default class LxwController {
  @operation({
    summary: "Get Lxw",
  })
  @get()
  static getLxw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lxw",
  })
  @post("{id}")
  static createLxw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
