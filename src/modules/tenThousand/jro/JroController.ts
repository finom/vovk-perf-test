import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jro")
export default class JroController {
  @operation({
    summary: "Get Jro",
  })
  @get()
  static getJro = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jro",
  })
  @post("{id}")
  static createJro = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
