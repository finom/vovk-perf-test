import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nfs")
export default class NfsController {
  @operation({
    summary: "Get Nfs",
  })
  @get()
  static getNfs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nfs",
  })
  @post("{id}")
  static createNfs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
