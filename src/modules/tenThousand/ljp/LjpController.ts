import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ljp")
export default class LjpController {
  @operation({
    summary: "Get Ljp",
  })
  @get()
  static getLjp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljp",
  })
  @post("{id}")
  static createLjp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
