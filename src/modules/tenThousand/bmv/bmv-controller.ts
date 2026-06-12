import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bmv")
export default class BmvController {
  @operation({
    summary: "Get Bmv",
  })
  @get()
  static getBmv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bmv",
  })
  @post("{id}")
  static createBmv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
