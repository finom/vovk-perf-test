import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aal")
export default class AalController {
  @operation({
    summary: "Get Aal",
  })
  @get()
  static getAal = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aal",
  })
  @post("{id}")
  static createAal = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
