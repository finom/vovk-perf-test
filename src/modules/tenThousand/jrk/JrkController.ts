import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jrk")
export default class JrkController {
  @operation({
    summary: "Get Jrk",
  })
  @get()
  static getJrk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrk",
  })
  @post("{id}")
  static createJrk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
