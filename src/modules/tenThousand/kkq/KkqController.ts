import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kkq")
export default class KkqController {
  @operation({
    summary: "Get Kkq",
  })
  @get()
  static getKkq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkq",
  })
  @post("{id}")
  static createKkq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
