import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ncx")
export default class NcxController {
  @operation({
    summary: "Get Ncx",
  })
  @get()
  static getNcx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ncx",
  })
  @post("{id}")
  static createNcx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
