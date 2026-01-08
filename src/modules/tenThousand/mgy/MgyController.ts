import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mgy")
export default class MgyController {
  @operation({
    summary: "Get Mgy",
  })
  @get()
  static getMgy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgy",
  })
  @post("{id}")
  static createMgy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
