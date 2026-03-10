import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lxj")
export default class LxjController {
  @operation({
    summary: "Get Lxj",
  })
  @get()
  static getLxj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lxj",
  })
  @post("{id}")
  static createLxj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
