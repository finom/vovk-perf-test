import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aiz")
export default class AizController {
  @operation({
    summary: "Get Aiz",
  })
  @get()
  static getAiz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aiz",
  })
  @post("{id}")
  static createAiz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
