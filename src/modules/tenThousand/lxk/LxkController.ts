import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lxk")
export default class LxkController {
  @operation({
    summary: "Get Lxk",
  })
  @get()
  static getLxk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lxk",
  })
  @post("{id}")
  static createLxk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
