import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jks")
export default class JksController {
  @operation({
    summary: "Get Jks",
  })
  @get()
  static getJks = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jks",
  })
  @post("{id}")
  static createJks = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
