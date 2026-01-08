import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fxt")
export default class FxtController {
  @operation({
    summary: "Get Fxt",
  })
  @get()
  static getFxt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxt",
  })
  @post("{id}")
  static createFxt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
