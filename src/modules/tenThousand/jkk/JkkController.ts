import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jkk")
export default class JkkController {
  @operation({
    summary: "Get Jkk",
  })
  @get()
  static getJkk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkk",
  })
  @post("{id}")
  static createJkk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
