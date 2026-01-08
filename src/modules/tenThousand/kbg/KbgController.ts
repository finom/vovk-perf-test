import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kbg")
export default class KbgController {
  @operation({
    summary: "Get Kbg",
  })
  @get()
  static getKbg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbg",
  })
  @post("{id}")
  static createKbg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
