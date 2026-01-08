import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jdy")
export default class JdyController {
  @operation({
    summary: "Get Jdy",
  })
  @get()
  static getJdy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdy",
  })
  @post("{id}")
  static createJdy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
