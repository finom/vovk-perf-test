import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aqq")
export default class AqqController {
  @operation({
    summary: "Get Aqq",
  })
  @get()
  static getAqq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqq",
  })
  @post("{id}")
  static createAqq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
