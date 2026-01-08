import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("huf")
export default class HufController {
  @operation({
    summary: "Get Huf",
  })
  @get()
  static getHuf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Huf",
  })
  @post("{id}")
  static createHuf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
