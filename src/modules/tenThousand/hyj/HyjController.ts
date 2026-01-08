import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hyj")
export default class HyjController {
  @operation({
    summary: "Get Hyj",
  })
  @get()
  static getHyj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyj",
  })
  @post("{id}")
  static createHyj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
