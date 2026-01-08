import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jib")
export default class JibController {
  @operation({
    summary: "Get Jib",
  })
  @get()
  static getJib = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jib",
  })
  @post("{id}")
  static createJib = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
