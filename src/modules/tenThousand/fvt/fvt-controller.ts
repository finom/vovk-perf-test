import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fvt")
export default class FvtController {
  @operation({
    summary: "Get Fvt",
  })
  @get()
  static getFvt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fvt",
  })
  @post("{id}")
  static createFvt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
