import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bfl")
export default class BflController {
  @operation({
    summary: "Get Bfl",
  })
  @get()
  static getBfl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfl",
  })
  @post("{id}")
  static createBfl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
