import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jfk")
export default class JfkController {
  @operation({
    summary: "Get Jfk",
  })
  @get()
  static getJfk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfk",
  })
  @post("{id}")
  static createJfk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
