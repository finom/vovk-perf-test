import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mrx")
export default class MrxController {
  @operation({
    summary: "Get Mrx",
  })
  @get()
  static getMrx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrx",
  })
  @post("{id}")
  static createMrx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
