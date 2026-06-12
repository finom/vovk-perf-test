import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("flt")
export default class FltController {
  @operation({
    summary: "Get Flt",
  })
  @get()
  static getFlt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Flt",
  })
  @post("{id}")
  static createFlt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
