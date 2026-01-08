import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("egp")
export default class EgpController {
  @operation({
    summary: "Get Egp",
  })
  @get()
  static getEgp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egp",
  })
  @post("{id}")
  static createEgp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
