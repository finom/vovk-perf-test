import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("sm")
export default class SmController {
  @operation({
    summary: "Get Sm",
  })
  @get()
  static getSm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sm",
  })
  @post("{id}")
  static createSm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
