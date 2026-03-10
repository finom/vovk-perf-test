import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cdt")
export default class CdtController {
  @operation({
    summary: "Get Cdt",
  })
  @get()
  static getCdt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cdt",
  })
  @post("{id}")
  static createCdt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
