import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jf")
export default class JfController {
  @operation({
    summary: "Get Jf",
  })
  @get()
  static getJf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jf",
  })
  @post("{id}")
  static createJf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
