import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lgc")
export default class LgcController {
  @operation({
    summary: "Get Lgc",
  })
  @get()
  static getLgc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lgc",
  })
  @post("{id}")
  static createLgc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
