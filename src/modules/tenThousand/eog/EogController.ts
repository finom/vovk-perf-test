import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eog")
export default class EogController {
  @operation({
    summary: "Get Eog",
  })
  @get()
  static getEog = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eog",
  })
  @post("{id}")
  static createEog = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
