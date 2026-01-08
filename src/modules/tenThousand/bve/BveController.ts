import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bve")
export default class BveController {
  @operation({
    summary: "Get Bve",
  })
  @get()
  static getBve = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bve",
  })
  @post("{id}")
  static createBve = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
