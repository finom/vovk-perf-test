import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bkh")
export default class BkhController {
  @operation({
    summary: "Get Bkh",
  })
  @get()
  static getBkh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bkh",
  })
  @post("{id}")
  static createBkh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
