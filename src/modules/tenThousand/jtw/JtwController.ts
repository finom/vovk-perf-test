import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jtw")
export default class JtwController {
  @operation({
    summary: "Get Jtw",
  })
  @get()
  static getJtw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jtw",
  })
  @post("{id}")
  static createJtw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
