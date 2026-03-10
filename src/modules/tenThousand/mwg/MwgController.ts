import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mwg")
export default class MwgController {
  @operation({
    summary: "Get Mwg",
  })
  @get()
  static getMwg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mwg",
  })
  @post("{id}")
  static createMwg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
