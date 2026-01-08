import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jjn")
export default class JjnController {
  @operation({
    summary: "Get Jjn",
  })
  @get()
  static getJjn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjn",
  })
  @post("{id}")
  static createJjn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
