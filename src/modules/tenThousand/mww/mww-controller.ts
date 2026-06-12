import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mww")
export default class MwwController {
  @operation({
    summary: "Get Mww",
  })
  @get()
  static getMww = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mww",
  })
  @post("{id}")
  static createMww = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
