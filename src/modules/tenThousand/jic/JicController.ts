import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jic")
export default class JicController {
  @operation({
    summary: "Get Jic",
  })
  @get()
  static getJic = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jic",
  })
  @post("{id}")
  static createJic = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
