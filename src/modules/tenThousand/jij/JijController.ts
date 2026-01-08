import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jij")
export default class JijController {
  @operation({
    summary: "Get Jij",
  })
  @get()
  static getJij = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jij",
  })
  @post("{id}")
  static createJij = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
