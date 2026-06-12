import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("tx")
export default class TxController {
  @operation({
    summary: "Get Tx",
  })
  @get()
  static getTx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Tx",
  })
  @post("{id}")
  static createTx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
