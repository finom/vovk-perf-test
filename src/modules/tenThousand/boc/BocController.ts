import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("boc")
export default class BocController {
  @operation({
    summary: "Get Boc",
  })
  @get()
  static getBoc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Boc",
  })
  @post("{id}")
  static createBoc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
