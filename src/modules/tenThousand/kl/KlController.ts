import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kl")
export default class KlController {
  @operation({
    summary: "Get Kl",
  })
  @get()
  static getKl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kl",
  })
  @post("{id}")
  static createKl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
