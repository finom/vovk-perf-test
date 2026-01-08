import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aat")
export default class AatController {
  @operation({
    summary: "Get Aat",
  })
  @get()
  static getAat = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aat",
  })
  @post("{id}")
  static createAat = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
