import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ksn")
export default class KsnController {
  @operation({
    summary: "Get Ksn",
  })
  @get()
  static getKsn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ksn",
  })
  @post("{id}")
  static createKsn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
