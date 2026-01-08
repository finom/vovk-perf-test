import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("euc")
export default class EucController {
  @operation({
    summary: "Get Euc",
  })
  @get()
  static getEuc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Euc",
  })
  @post("{id}")
  static createEuc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
