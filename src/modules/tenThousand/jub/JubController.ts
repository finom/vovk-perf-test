import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jub")
export default class JubController {
  @operation({
    summary: "Get Jub",
  })
  @get()
  static getJub = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jub",
  })
  @post("{id}")
  static createJub = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
