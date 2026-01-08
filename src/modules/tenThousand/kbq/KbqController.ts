import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kbq")
export default class KbqController {
  @operation({
    summary: "Get Kbq",
  })
  @get()
  static getKbq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbq",
  })
  @post("{id}")
  static createKbq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
