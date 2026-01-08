import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gwo")
export default class GwoController {
  @operation({
    summary: "Get Gwo",
  })
  @get()
  static getGwo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwo",
  })
  @post("{id}")
  static createGwo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
