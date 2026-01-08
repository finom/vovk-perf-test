import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fej")
export default class FejController {
  @operation({
    summary: "Get Fej",
  })
  @get()
  static getFej = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fej",
  })
  @post("{id}")
  static createFej = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
