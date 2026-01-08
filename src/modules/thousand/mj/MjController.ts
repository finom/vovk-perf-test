import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mj")
export default class MjController {
  @operation({
    summary: "Get Mj",
  })
  @get()
  static getMj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mj",
  })
  @post("{id}")
  static createMj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
