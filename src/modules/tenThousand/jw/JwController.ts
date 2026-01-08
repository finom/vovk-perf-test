import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jw")
export default class JwController {
  @operation({
    summary: "Get Jw",
  })
  @get()
  static getJw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jw",
  })
  @post("{id}")
  static createJw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
