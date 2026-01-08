import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jyy")
export default class JyyController {
  @operation({
    summary: "Get Jyy",
  })
  @get()
  static getJyy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyy",
  })
  @post("{id}")
  static createJyy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
