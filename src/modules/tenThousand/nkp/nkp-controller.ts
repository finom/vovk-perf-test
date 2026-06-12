import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nkp")
export default class NkpController {
  @operation({
    summary: "Get Nkp",
  })
  @get()
  static getNkp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nkp",
  })
  @post("{id}")
  static createNkp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
