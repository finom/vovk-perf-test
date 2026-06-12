import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mox")
export default class MoxController {
  @operation({
    summary: "Get Mox",
  })
  @get()
  static getMox = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mox",
  })
  @post("{id}")
  static createMox = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
