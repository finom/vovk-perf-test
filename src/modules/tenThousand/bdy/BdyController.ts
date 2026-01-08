import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bdy")
export default class BdyController {
  @operation({
    summary: "Get Bdy",
  })
  @get()
  static getBdy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdy",
  })
  @post("{id}")
  static createBdy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
