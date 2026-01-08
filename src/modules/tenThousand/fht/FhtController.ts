import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fht")
export default class FhtController {
  @operation({
    summary: "Get Fht",
  })
  @get()
  static getFht = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fht",
  })
  @post("{id}")
  static createFht = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
