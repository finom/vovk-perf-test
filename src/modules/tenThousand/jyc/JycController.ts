import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jyc")
export default class JycController {
  @operation({
    summary: "Get Jyc",
  })
  @get()
  static getJyc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyc",
  })
  @post("{id}")
  static createJyc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
