import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mkh")
export default class MkhController {
  @operation({
    summary: "Get Mkh",
  })
  @get()
  static getMkh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkh",
  })
  @post("{id}")
  static createMkh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
