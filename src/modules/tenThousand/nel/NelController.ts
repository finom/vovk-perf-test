import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nel")
export default class NelController {
  @operation({
    summary: "Get Nel",
  })
  @get()
  static getNel = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nel",
  })
  @post("{id}")
  static createNel = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
