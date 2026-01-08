import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bup")
export default class BupController {
  @operation({
    summary: "Get Bup",
  })
  @get()
  static getBup = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bup",
  })
  @post("{id}")
  static createBup = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
