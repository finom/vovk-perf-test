import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("joq")
export default class JoqController {
  @operation({
    summary: "Get Joq",
  })
  @get()
  static getJoq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Joq",
  })
  @post("{id}")
  static createJoq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
