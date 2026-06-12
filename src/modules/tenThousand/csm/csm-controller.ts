import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("csm")
export default class CsmController {
  @operation({
    summary: "Get Csm",
  })
  @get()
  static getCsm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Csm",
  })
  @post("{id}")
  static createCsm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
