import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("epl")
export default class EplController {
  @operation({
    summary: "Get Epl",
  })
  @get()
  static getEpl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epl",
  })
  @post("{id}")
  static createEpl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
