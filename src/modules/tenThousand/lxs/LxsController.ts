import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lxs")
export default class LxsController {
  @operation({
    summary: "Get Lxs",
  })
  @get()
  static getLxs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lxs",
  })
  @post("{id}")
  static createLxs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
