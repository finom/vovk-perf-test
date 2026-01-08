import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kbw")
export default class KbwController {
  @operation({
    summary: "Get Kbw",
  })
  @get()
  static getKbw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbw",
  })
  @post("{id}")
  static createKbw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
