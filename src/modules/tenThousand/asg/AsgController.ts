import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("asg")
export default class AsgController {
  @operation({
    summary: "Get Asg",
  })
  @get()
  static getAsg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asg",
  })
  @post("{id}")
  static createAsg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
