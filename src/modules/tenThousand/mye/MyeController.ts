import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mye")
export default class MyeController {
  @operation({
    summary: "Get Mye",
  })
  @get()
  static getMye = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mye",
  })
  @post("{id}")
  static createMye = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
