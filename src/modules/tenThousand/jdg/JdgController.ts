import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jdg")
export default class JdgController {
  @operation({
    summary: "Get Jdg",
  })
  @get()
  static getJdg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdg",
  })
  @post("{id}")
  static createJdg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
