import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fgl")
export default class FglController {
  @operation({
    summary: "Get Fgl",
  })
  @get()
  static getFgl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgl",
  })
  @post("{id}")
  static createFgl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
