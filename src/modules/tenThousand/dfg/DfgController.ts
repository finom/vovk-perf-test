import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dfg")
export default class DfgController {
  @operation({
    summary: "Get Dfg",
  })
  @get()
  static getDfg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dfg",
  })
  @post("{id}")
  static createDfg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
