import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lwj")
export default class LwjController {
  @operation({
    summary: "Get Lwj",
  })
  @get()
  static getLwj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwj",
  })
  @post("{id}")
  static createLwj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
