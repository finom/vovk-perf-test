import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lu")
export default class LuController {
  @operation({
    summary: "Get Lu",
  })
  @get()
  static getLu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lu",
  })
  @post("{id}")
  static createLu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
