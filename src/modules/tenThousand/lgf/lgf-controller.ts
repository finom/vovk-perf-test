import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lgf")
export default class LgfController {
  @operation({
    summary: "Get Lgf",
  })
  @get()
  static getLgf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lgf",
  })
  @post("{id}")
  static createLgf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
