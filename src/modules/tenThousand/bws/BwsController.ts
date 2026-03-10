import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bws")
export default class BwsController {
  @operation({
    summary: "Get Bws",
  })
  @get()
  static getBws = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bws",
  })
  @post("{id}")
  static createBws = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
