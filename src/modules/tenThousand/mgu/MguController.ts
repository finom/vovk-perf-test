import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mgu")
export default class MguController {
  @operation({
    summary: "Get Mgu",
  })
  @get()
  static getMgu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgu",
  })
  @post("{id}")
  static createMgu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
