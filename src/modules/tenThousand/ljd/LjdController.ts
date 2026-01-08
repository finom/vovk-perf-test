import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ljd")
export default class LjdController {
  @operation({
    summary: "Get Ljd",
  })
  @get()
  static getLjd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljd",
  })
  @post("{id}")
  static createLjd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
