import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fab")
export default class FabController {
  @operation({
    summary: "Get Fab",
  })
  @get()
  static getFab = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fab",
  })
  @post("{id}")
  static createFab = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
