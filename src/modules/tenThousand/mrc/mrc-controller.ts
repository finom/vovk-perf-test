import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mrc")
export default class MrcController {
  @operation({
    summary: "Get Mrc",
  })
  @get()
  static getMrc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mrc",
  })
  @post("{id}")
  static createMrc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
