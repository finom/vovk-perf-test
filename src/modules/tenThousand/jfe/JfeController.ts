import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jfe")
export default class JfeController {
  @operation({
    summary: "Get Jfe",
  })
  @get()
  static getJfe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfe",
  })
  @post("{id}")
  static createJfe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
