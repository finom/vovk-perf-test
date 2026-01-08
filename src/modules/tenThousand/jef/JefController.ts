import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jef")
export default class JefController {
  @operation({
    summary: "Get Jef",
  })
  @get()
  static getJef = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jef",
  })
  @post("{id}")
  static createJef = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
