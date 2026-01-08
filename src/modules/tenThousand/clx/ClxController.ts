import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("clx")
export default class ClxController {
  @operation({
    summary: "Get Clx",
  })
  @get()
  static getClx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Clx",
  })
  @post("{id}")
  static createClx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
