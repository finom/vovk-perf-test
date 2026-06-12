import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("btf")
export default class BtfController {
  @operation({
    summary: "Get Btf",
  })
  @get()
  static getBtf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Btf",
  })
  @post("{id}")
  static createBtf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
