import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mhq")
export default class MhqController {
  @operation({
    summary: "Get Mhq",
  })
  @get()
  static getMhq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mhq",
  })
  @post("{id}")
  static createMhq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
