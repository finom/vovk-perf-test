import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gvc")
export default class GvcController {
  @operation({
    summary: "Get Gvc",
  })
  @get()
  static getGvc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvc",
  })
  @post("{id}")
  static createGvc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
