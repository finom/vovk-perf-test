import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jjr")
export default class JjrController {
  @operation({
    summary: "Get Jjr",
  })
  @get()
  static getJjr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjr",
  })
  @post("{id}")
  static createJjr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
