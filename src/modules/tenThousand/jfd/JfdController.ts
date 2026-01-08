import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jfd")
export default class JfdController {
  @operation({
    summary: "Get Jfd",
  })
  @get()
  static getJfd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfd",
  })
  @post("{id}")
  static createJfd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
