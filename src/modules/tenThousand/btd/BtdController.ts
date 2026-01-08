import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("btd")
export default class BtdController {
  @operation({
    summary: "Get Btd",
  })
  @get()
  static getBtd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btd",
  })
  @post("{id}")
  static createBtd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
