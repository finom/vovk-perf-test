import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dre")
export default class DreController {
  @operation({
    summary: "Get Dre",
  })
  @get()
  static getDre = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dre",
  })
  @post("{id}")
  static createDre = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
