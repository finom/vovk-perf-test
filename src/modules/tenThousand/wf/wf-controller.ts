import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("wf")
export default class WfController {
  @operation({
    summary: "Get Wf",
  })
  @get()
  static getWf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Wf",
  })
  @post("{id}")
  static createWf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
