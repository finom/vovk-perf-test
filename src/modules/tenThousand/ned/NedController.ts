import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ned")
export default class NedController {
  @operation({
    summary: "Get Ned",
  })
  @get()
  static getNed = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ned",
  })
  @post("{id}")
  static createNed = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
