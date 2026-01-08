import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bub")
export default class BubController {
  @operation({
    summary: "Get Bub",
  })
  @get()
  static getBub = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bub",
  })
  @post("{id}")
  static createBub = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
