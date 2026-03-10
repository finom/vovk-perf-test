import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lxe")
export default class LxeController {
  @operation({
    summary: "Get Lxe",
  })
  @get()
  static getLxe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lxe",
  })
  @post("{id}")
  static createLxe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
