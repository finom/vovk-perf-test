import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bbj")
export default class BbjController {
  @operation({
    summary: "Get Bbj",
  })
  @get()
  static getBbj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbj",
  })
  @post("{id}")
  static createBbj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
