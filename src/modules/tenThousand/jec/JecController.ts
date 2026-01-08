import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jec")
export default class JecController {
  @operation({
    summary: "Get Jec",
  })
  @get()
  static getJec = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jec",
  })
  @post("{id}")
  static createJec = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
