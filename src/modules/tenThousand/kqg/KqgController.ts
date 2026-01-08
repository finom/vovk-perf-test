import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kqg")
export default class KqgController {
  @operation({
    summary: "Get Kqg",
  })
  @get()
  static getKqg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqg",
  })
  @post("{id}")
  static createKqg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
