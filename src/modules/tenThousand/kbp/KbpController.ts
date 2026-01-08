import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kbp")
export default class KbpController {
  @operation({
    summary: "Get Kbp",
  })
  @get()
  static getKbp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbp",
  })
  @post("{id}")
  static createKbp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
