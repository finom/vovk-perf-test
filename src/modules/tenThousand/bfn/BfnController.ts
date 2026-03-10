import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bfn")
export default class BfnController {
  @operation({
    summary: "Get Bfn",
  })
  @get()
  static getBfn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bfn",
  })
  @post("{id}")
  static createBfn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
