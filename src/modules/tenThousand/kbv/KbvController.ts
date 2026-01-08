import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kbv")
export default class KbvController {
  @operation({
    summary: "Get Kbv",
  })
  @get()
  static getKbv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbv",
  })
  @post("{id}")
  static createKbv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
