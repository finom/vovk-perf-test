import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("elc")
export default class ElcController {
  @operation({
    summary: "Get Elc",
  })
  @get()
  static getElc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elc",
  })
  @post("{id}")
  static createElc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
