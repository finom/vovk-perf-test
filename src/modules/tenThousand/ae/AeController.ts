import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ae")
export default class AeController {
  @operation({
    summary: "Get Ae",
  })
  @get()
  static getAe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ae",
  })
  @post("{id}")
  static createAe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
