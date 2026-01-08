import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mub")
export default class MubController {
  @operation({
    summary: "Get Mub",
  })
  @get()
  static getMub = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mub",
  })
  @post("{id}")
  static createMub = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
