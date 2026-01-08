import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hxe")
export default class HxeController {
  @operation({
    summary: "Get Hxe",
  })
  @get()
  static getHxe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxe",
  })
  @post("{id}")
  static createHxe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
