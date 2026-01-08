import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cbt")
export default class CbtController {
  @operation({
    summary: "Get Cbt",
  })
  @get()
  static getCbt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbt",
  })
  @post("{id}")
  static createCbt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
