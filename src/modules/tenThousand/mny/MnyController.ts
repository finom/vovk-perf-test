import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mny")
export default class MnyController {
  @operation({
    summary: "Get Mny",
  })
  @get()
  static getMny = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mny",
  })
  @post("{id}")
  static createMny = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
