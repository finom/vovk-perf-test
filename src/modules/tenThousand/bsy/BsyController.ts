import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bsy")
export default class BsyController {
  @operation({
    summary: "Get Bsy",
  })
  @get()
  static getBsy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsy",
  })
  @post("{id}")
  static createBsy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
