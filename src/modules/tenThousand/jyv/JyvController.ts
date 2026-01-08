import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jyv")
export default class JyvController {
  @operation({
    summary: "Get Jyv",
  })
  @get()
  static getJyv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyv",
  })
  @post("{id}")
  static createJyv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
