import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bwq")
export default class BwqController {
  @operation({
    summary: "Get Bwq",
  })
  @get()
  static getBwq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bwq",
  })
  @post("{id}")
  static createBwq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
