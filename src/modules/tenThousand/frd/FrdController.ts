import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("frd")
export default class FrdController {
  @operation({
    summary: "Get Frd",
  })
  @get()
  static getFrd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Frd",
  })
  @post("{id}")
  static createFrd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
