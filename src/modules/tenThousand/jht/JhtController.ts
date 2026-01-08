import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jht")
export default class JhtController {
  @operation({
    summary: "Get Jht",
  })
  @get()
  static getJht = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jht",
  })
  @post("{id}")
  static createJht = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
