import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jxe")
export default class JxeController {
  @operation({
    summary: "Get Jxe",
  })
  @get()
  static getJxe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxe",
  })
  @post("{id}")
  static createJxe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
