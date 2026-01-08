import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bog")
export default class BogController {
  @operation({
    summary: "Get Bog",
  })
  @get()
  static getBog = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bog",
  })
  @post("{id}")
  static createBog = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
