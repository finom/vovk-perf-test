import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mwx")
export default class MwxController {
  @operation({
    summary: "Get Mwx",
  })
  @get()
  static getMwx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mwx",
  })
  @post("{id}")
  static createMwx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
