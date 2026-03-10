import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hyp")
export default class HypController {
  @operation({
    summary: "Get Hyp",
  })
  @get()
  static getHyp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hyp",
  })
  @post("{id}")
  static createHyp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
