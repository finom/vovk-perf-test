import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bte")
export default class BteController {
  @operation({
    summary: "Get Bte",
  })
  @get()
  static getBte = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bte",
  })
  @post("{id}")
  static createBte = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
