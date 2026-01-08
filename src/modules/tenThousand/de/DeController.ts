import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("de")
export default class DeController {
  @operation({
    summary: "Get De",
  })
  @get()
  static getDe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create De",
  })
  @post("{id}")
  static createDe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
