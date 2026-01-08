import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ljb")
export default class LjbController {
  @operation({
    summary: "Get Ljb",
  })
  @get()
  static getLjb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljb",
  })
  @post("{id}")
  static createLjb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
