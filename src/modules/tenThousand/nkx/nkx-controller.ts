import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nkx")
export default class NkxController {
  @operation({
    summary: "Get Nkx",
  })
  @get()
  static getNkx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nkx",
  })
  @post("{id}")
  static createNkx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
