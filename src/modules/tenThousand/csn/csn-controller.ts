import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("csn")
export default class CsnController {
  @operation({
    summary: "Get Csn",
  })
  @get()
  static getCsn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Csn",
  })
  @post("{id}")
  static createCsn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
