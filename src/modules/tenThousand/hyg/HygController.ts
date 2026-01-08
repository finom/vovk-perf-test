import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hyg")
export default class HygController {
  @operation({
    summary: "Get Hyg",
  })
  @get()
  static getHyg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyg",
  })
  @post("{id}")
  static createHyg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
