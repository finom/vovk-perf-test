import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lwc")
export default class LwcController {
  @operation({
    summary: "Get Lwc",
  })
  @get()
  static getLwc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwc",
  })
  @post("{id}")
  static createLwc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
