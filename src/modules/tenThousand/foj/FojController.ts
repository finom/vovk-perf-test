import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("foj")
export default class FojController {
  @operation({
    summary: "Get Foj",
  })
  @get()
  static getFoj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Foj",
  })
  @post("{id}")
  static createFoj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
