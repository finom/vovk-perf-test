import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cyw")
export default class CywController {
  @operation({
    summary: "Get Cyw",
  })
  @get()
  static getCyw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyw",
  })
  @post("{id}")
  static createCyw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
