import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dte")
export default class DteController {
  @operation({
    summary: "Get Dte",
  })
  @get()
  static getDte = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dte",
  })
  @post("{id}")
  static createDte = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
