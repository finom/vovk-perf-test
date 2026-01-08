import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jxt")
export default class JxtController {
  @operation({
    summary: "Get Jxt",
  })
  @get()
  static getJxt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxt",
  })
  @post("{id}")
  static createJxt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
