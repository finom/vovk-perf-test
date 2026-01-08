import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bft")
export default class BftController {
  @operation({
    summary: "Get Bft",
  })
  @get()
  static getBft = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bft",
  })
  @post("{id}")
  static createBft = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
