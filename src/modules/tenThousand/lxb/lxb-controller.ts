import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lxb")
export default class LxbController {
  @operation({
    summary: "Get Lxb",
  })
  @get()
  static getLxb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lxb",
  })
  @post("{id}")
  static createLxb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
