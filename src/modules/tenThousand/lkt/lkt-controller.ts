import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lkt")
export default class LktController {
  @operation({
    summary: "Get Lkt",
  })
  @get()
  static getLkt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lkt",
  })
  @post("{id}")
  static createLkt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
