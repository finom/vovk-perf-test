import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ljc")
export default class LjcController {
  @operation({
    summary: "Get Ljc",
  })
  @get()
  static getLjc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljc",
  })
  @post("{id}")
  static createLjc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
