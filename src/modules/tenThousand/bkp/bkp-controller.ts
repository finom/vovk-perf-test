import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bkp")
export default class BkpController {
  @operation({
    summary: "Get Bkp",
  })
  @get()
  static getBkp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bkp",
  })
  @post("{id}")
  static createBkp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
