import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mkg")
export default class MkgController {
  @operation({
    summary: "Get Mkg",
  })
  @get()
  static getMkg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkg",
  })
  @post("{id}")
  static createMkg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
