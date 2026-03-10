import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cbp")
export default class CbpController {
  @operation({
    summary: "Get Cbp",
  })
  @get()
  static getCbp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cbp",
  })
  @post("{id}")
  static createCbp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
