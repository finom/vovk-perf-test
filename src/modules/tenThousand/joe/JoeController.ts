import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("joe")
export default class JoeController {
  @operation({
    summary: "Get Joe",
  })
  @get()
  static getJoe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Joe",
  })
  @post("{id}")
  static createJoe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
