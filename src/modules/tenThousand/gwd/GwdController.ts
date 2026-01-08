import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gwd")
export default class GwdController {
  @operation({
    summary: "Get Gwd",
  })
  @get()
  static getGwd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwd",
  })
  @post("{id}")
  static createGwd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
