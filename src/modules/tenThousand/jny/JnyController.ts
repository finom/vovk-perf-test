import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jny")
export default class JnyController {
  @operation({
    summary: "Get Jny",
  })
  @get()
  static getJny = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jny",
  })
  @post("{id}")
  static createJny = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
