import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("p")
export default class PController {
  @operation({
    summary: "Get P",
  })
  @get()
  static getP = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create P",
  })
  @post("{id}")
  static createP = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
