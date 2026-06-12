import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hst")
export default class HstController {
  @operation({
    summary: "Get Hst",
  })
  @get()
  static getHst = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hst",
  })
  @post("{id}")
  static createHst = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
