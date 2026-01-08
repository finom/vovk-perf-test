import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iae")
export default class IaeController {
  @operation({
    summary: "Get Iae",
  })
  @get()
  static getIae = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iae",
  })
  @post("{id}")
  static createIae = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
