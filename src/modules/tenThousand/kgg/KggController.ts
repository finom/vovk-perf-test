import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kgg")
export default class KggController {
  @operation({
    summary: "Get Kgg",
  })
  @get()
  static getKgg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgg",
  })
  @post("{id}")
  static createKgg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
