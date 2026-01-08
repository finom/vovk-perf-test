import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kqn")
export default class KqnController {
  @operation({
    summary: "Get Kqn",
  })
  @get()
  static getKqn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqn",
  })
  @post("{id}")
  static createKqn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
