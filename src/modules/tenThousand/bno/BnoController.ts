import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bno")
export default class BnoController {
  @operation({
    summary: "Get Bno",
  })
  @get()
  static getBno = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bno",
  })
  @post("{id}")
  static createBno = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
