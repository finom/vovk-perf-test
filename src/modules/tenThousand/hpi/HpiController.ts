import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hpi")
export default class HpiController {
  @operation({
    summary: "Get Hpi",
  })
  @get()
  static getHpi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hpi",
  })
  @post("{id}")
  static createHpi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
