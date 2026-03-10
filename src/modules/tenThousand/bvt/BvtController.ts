import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bvt")
export default class BvtController {
  @operation({
    summary: "Get Bvt",
  })
  @get()
  static getBvt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bvt",
  })
  @post("{id}")
  static createBvt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
