import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ebn")
export default class EbnController {
  @operation({
    summary: "Get Ebn",
  })
  @get()
  static getEbn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebn",
  })
  @post("{id}")
  static createEbn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
