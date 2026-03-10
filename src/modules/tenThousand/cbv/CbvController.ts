import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cbv")
export default class CbvController {
  @operation({
    summary: "Get Cbv",
  })
  @get()
  static getCbv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cbv",
  })
  @post("{id}")
  static createCbv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
