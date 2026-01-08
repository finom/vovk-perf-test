import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ayg")
export default class AygController {
  @operation({
    summary: "Get Ayg",
  })
  @get()
  static getAyg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayg",
  })
  @post("{id}")
  static createAyg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
