import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jhu")
export default class JhuController {
  @operation({
    summary: "Get Jhu",
  })
  @get()
  static getJhu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhu",
  })
  @post("{id}")
  static createJhu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
