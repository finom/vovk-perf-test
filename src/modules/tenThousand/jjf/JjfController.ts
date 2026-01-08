import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jjf")
export default class JjfController {
  @operation({
    summary: "Get Jjf",
  })
  @get()
  static getJjf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjf",
  })
  @post("{id}")
  static createJjf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
