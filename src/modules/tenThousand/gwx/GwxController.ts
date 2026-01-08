import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gwx")
export default class GwxController {
  @operation({
    summary: "Get Gwx",
  })
  @get()
  static getGwx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwx",
  })
  @post("{id}")
  static createGwx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
