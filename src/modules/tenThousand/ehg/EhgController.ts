import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ehg")
export default class EhgController {
  @operation({
    summary: "Get Ehg",
  })
  @get()
  static getEhg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehg",
  })
  @post("{id}")
  static createEhg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
