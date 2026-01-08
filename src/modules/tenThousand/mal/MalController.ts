import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mal")
export default class MalController {
  @operation({
    summary: "Get Mal",
  })
  @get()
  static getMal = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mal",
  })
  @post("{id}")
  static createMal = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
