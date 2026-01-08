import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bde")
export default class BdeController {
  @operation({
    summary: "Get Bde",
  })
  @get()
  static getBde = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bde",
  })
  @post("{id}")
  static createBde = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
