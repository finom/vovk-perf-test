import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kqa")
export default class KqaController {
  @operation({
    summary: "Get Kqa",
  })
  @get()
  static getKqa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqa",
  })
  @post("{id}")
  static createKqa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
