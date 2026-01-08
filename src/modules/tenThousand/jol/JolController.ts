import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jol")
export default class JolController {
  @operation({
    summary: "Get Jol",
  })
  @get()
  static getJol = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jol",
  })
  @post("{id}")
  static createJol = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
