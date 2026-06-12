import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cfu")
export default class CfuController {
  @operation({
    summary: "Get Cfu",
  })
  @get()
  static getCfu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cfu",
  })
  @post("{id}")
  static createCfu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
