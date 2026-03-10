import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("btg")
export default class BtgController {
  @operation({
    summary: "Get Btg",
  })
  @get()
  static getBtg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Btg",
  })
  @post("{id}")
  static createBtg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
