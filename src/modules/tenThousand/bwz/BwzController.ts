import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bwz")
export default class BwzController {
  @operation({
    summary: "Get Bwz",
  })
  @get()
  static getBwz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bwz",
  })
  @post("{id}")
  static createBwz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
