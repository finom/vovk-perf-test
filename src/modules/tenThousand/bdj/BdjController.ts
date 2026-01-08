import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bdj")
export default class BdjController {
  @operation({
    summary: "Get Bdj",
  })
  @get()
  static getBdj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdj",
  })
  @post("{id}")
  static createBdj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
