import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jyj")
export default class JyjController {
  @operation({
    summary: "Get Jyj",
  })
  @get()
  static getJyj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyj",
  })
  @post("{id}")
  static createJyj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
