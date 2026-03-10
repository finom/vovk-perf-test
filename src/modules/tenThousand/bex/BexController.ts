import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bex")
export default class BexController {
  @operation({
    summary: "Get Bex",
  })
  @get()
  static getBex = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bex",
  })
  @post("{id}")
  static createBex = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
