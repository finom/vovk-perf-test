import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ehl")
export default class EhlController {
  @operation({
    summary: "Get Ehl",
  })
  @get()
  static getEhl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehl",
  })
  @post("{id}")
  static createEhl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
