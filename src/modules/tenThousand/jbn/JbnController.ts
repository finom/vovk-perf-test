import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jbn")
export default class JbnController {
  @operation({
    summary: "Get Jbn",
  })
  @get()
  static getJbn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbn",
  })
  @post("{id}")
  static createJbn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
