import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("knb")
export default class KnbController {
  @operation({
    summary: "Get Knb",
  })
  @get()
  static getKnb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knb",
  })
  @post("{id}")
  static createKnb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
