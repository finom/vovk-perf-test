import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fmt")
export default class FmtController {
  @operation({
    summary: "Get Fmt",
  })
  @get()
  static getFmt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fmt",
  })
  @post("{id}")
  static createFmt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
