import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ccs")
export default class CcsController {
  @operation({
    summary: "Get Ccs",
  })
  @get()
  static getCcs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ccs",
  })
  @post("{id}")
  static createCcs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
