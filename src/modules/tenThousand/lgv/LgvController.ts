import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lgv")
export default class LgvController {
  @operation({
    summary: "Get Lgv",
  })
  @get()
  static getLgv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lgv",
  })
  @post("{id}")
  static createLgv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
