import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fyd")
export default class FydController {
  @operation({
    summary: "Get Fyd",
  })
  @get()
  static getFyd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyd",
  })
  @post("{id}")
  static createFyd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
