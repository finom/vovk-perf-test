import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bxn")
export default class BxnController {
  @operation({
    summary: "Get Bxn",
  })
  @get()
  static getBxn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bxn",
  })
  @post("{id}")
  static createBxn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
