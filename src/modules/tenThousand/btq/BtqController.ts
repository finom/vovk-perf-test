import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("btq")
export default class BtqController {
  @operation({
    summary: "Get Btq",
  })
  @get()
  static getBtq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Btq",
  })
  @post("{id}")
  static createBtq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
