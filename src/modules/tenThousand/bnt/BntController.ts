import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bnt")
export default class BntController {
  @operation({
    summary: "Get Bnt",
  })
  @get()
  static getBnt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bnt",
  })
  @post("{id}")
  static createBnt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
