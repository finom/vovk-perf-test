import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("beo")
export default class BeoController {
  @operation({
    summary: "Get Beo",
  })
  @get()
  static getBeo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Beo",
  })
  @post("{id}")
  static createBeo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
