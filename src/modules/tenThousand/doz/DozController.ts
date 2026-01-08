import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("doz")
export default class DozController {
  @operation({
    summary: "Get Doz",
  })
  @get()
  static getDoz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Doz",
  })
  @post("{id}")
  static createDoz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
