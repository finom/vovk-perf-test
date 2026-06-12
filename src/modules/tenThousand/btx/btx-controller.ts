import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("btx")
export default class BtxController {
  @operation({
    summary: "Get Btx",
  })
  @get()
  static getBtx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Btx",
  })
  @post("{id}")
  static createBtx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
