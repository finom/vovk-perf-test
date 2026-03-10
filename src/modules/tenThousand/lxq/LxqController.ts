import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lxq")
export default class LxqController {
  @operation({
    summary: "Get Lxq",
  })
  @get()
  static getLxq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lxq",
  })
  @post("{id}")
  static createLxq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
