import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ljy")
export default class LjyController {
  @operation({
    summary: "Get Ljy",
  })
  @get()
  static getLjy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljy",
  })
  @post("{id}")
  static createLjy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
