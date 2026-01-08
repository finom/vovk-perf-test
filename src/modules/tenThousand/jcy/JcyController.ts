import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jcy")
export default class JcyController {
  @operation({
    summary: "Get Jcy",
  })
  @get()
  static getJcy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcy",
  })
  @post("{id}")
  static createJcy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
