import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hff")
export default class HffController {
  @operation({
    summary: "Get Hff",
  })
  @get()
  static getHff = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hff",
  })
  @post("{id}")
  static createHff = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
