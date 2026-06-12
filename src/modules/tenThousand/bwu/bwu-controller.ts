import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bwu")
export default class BwuController {
  @operation({
    summary: "Get Bwu",
  })
  @get()
  static getBwu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bwu",
  })
  @post("{id}")
  static createBwu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
