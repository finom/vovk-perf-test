import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jqk")
export default class JqkController {
  @operation({
    summary: "Get Jqk",
  })
  @get()
  static getJqk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqk",
  })
  @post("{id}")
  static createJqk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
