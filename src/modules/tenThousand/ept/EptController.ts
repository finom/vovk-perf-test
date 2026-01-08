import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ept")
export default class EptController {
  @operation({
    summary: "Get Ept",
  })
  @get()
  static getEpt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ept",
  })
  @post("{id}")
  static createEpt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
