import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kbk")
export default class KbkController {
  @operation({
    summary: "Get Kbk",
  })
  @get()
  static getKbk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbk",
  })
  @post("{id}")
  static createKbk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
