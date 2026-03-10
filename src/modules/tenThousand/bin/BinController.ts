import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bin")
export default class BinController {
  @operation({
    summary: "Get Bin",
  })
  @get()
  static getBin = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bin",
  })
  @post("{id}")
  static createBin = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
