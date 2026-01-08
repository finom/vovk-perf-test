import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fgs")
export default class FgsController {
  @operation({
    summary: "Get Fgs",
  })
  @get()
  static getFgs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgs",
  })
  @post("{id}")
  static createFgs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
