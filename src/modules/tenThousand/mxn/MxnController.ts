import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mxn")
export default class MxnController {
  @operation({
    summary: "Get Mxn",
  })
  @get()
  static getMxn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mxn",
  })
  @post("{id}")
  static createMxn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
