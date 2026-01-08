import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("qu")
export default class QuController {
  @operation({
    summary: "Get Qu",
  })
  @get()
  static getQu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qu",
  })
  @post("{id}")
  static createQu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
