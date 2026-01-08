import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mrj")
export default class MrjController {
  @operation({
    summary: "Get Mrj",
  })
  @get()
  static getMrj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrj",
  })
  @post("{id}")
  static createMrj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
