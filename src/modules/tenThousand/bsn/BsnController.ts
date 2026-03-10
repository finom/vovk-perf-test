import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bsn")
export default class BsnController {
  @operation({
    summary: "Get Bsn",
  })
  @get()
  static getBsn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bsn",
  })
  @post("{id}")
  static createBsn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
