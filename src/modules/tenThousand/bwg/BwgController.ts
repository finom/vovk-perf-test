import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bwg")
export default class BwgController {
  @operation({
    summary: "Get Bwg",
  })
  @get()
  static getBwg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bwg",
  })
  @post("{id}")
  static createBwg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
