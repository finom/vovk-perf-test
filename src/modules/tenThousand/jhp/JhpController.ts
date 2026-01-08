import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jhp")
export default class JhpController {
  @operation({
    summary: "Get Jhp",
  })
  @get()
  static getJhp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhp",
  })
  @post("{id}")
  static createJhp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
