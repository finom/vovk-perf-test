import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lhj")
export default class LhjController {
  @operation({
    summary: "Get Lhj",
  })
  @get()
  static getLhj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhj",
  })
  @post("{id}")
  static createLhj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
