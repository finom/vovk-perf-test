import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ljj")
export default class LjjController {
  @operation({
    summary: "Get Ljj",
  })
  @get()
  static getLjj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljj",
  })
  @post("{id}")
  static createLjj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
