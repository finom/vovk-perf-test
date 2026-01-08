import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lbj")
export default class LbjController {
  @operation({
    summary: "Get Lbj",
  })
  @get()
  static getLbj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbj",
  })
  @post("{id}")
  static createLbj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
