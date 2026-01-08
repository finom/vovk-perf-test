import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("atq")
export default class AtqController {
  @operation({
    summary: "Get Atq",
  })
  @get()
  static getAtq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Atq",
  })
  @post("{id}")
  static createAtq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
