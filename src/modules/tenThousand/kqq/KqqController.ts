import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kqq")
export default class KqqController {
  @operation({
    summary: "Get Kqq",
  })
  @get()
  static getKqq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqq",
  })
  @post("{id}")
  static createKqq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
