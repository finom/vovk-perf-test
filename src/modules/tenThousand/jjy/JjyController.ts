import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jjy")
export default class JjyController {
  @operation({
    summary: "Get Jjy",
  })
  @get()
  static getJjy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjy",
  })
  @post("{id}")
  static createJjy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
