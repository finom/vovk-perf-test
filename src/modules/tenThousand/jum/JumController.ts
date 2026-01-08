import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jum")
export default class JumController {
  @operation({
    summary: "Get Jum",
  })
  @get()
  static getJum = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jum",
  })
  @post("{id}")
  static createJum = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
