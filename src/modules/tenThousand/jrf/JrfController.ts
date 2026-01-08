import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jrf")
export default class JrfController {
  @operation({
    summary: "Get Jrf",
  })
  @get()
  static getJrf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrf",
  })
  @post("{id}")
  static createJrf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
