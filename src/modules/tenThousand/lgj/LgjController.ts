import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lgj")
export default class LgjController {
  @operation({
    summary: "Get Lgj",
  })
  @get()
  static getLgj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lgj",
  })
  @post("{id}")
  static createLgj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
