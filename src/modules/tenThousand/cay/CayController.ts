import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cay")
export default class CayController {
  @operation({
    summary: "Get Cay",
  })
  @get()
  static getCay = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cay",
  })
  @post("{id}")
  static createCay = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
