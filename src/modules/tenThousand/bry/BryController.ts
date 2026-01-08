import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bry")
export default class BryController {
  @operation({
    summary: "Get Bry",
  })
  @get()
  static getBry = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bry",
  })
  @post("{id}")
  static createBry = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
