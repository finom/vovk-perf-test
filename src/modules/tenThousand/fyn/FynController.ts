import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fyn")
export default class FynController {
  @operation({
    summary: "Get Fyn",
  })
  @get()
  static getFyn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyn",
  })
  @post("{id}")
  static createFyn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
