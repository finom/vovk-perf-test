import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lol")
export default class LolController {
  @operation({
    summary: "Get Lol",
  })
  @get()
  static getLol = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lol",
  })
  @post("{id}")
  static createLol = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
