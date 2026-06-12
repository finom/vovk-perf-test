import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dfn")
export default class DfnController {
  @operation({
    summary: "Get Dfn",
  })
  @get()
  static getDfn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dfn",
  })
  @post("{id}")
  static createDfn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
