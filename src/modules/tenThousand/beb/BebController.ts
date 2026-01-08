import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("beb")
export default class BebController {
  @operation({
    summary: "Get Beb",
  })
  @get()
  static getBeb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Beb",
  })
  @post("{id}")
  static createBeb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
