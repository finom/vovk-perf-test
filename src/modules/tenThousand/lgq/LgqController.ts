import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lgq")
export default class LgqController {
  @operation({
    summary: "Get Lgq",
  })
  @get()
  static getLgq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lgq",
  })
  @post("{id}")
  static createLgq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
