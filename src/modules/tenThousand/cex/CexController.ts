import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cex")
export default class CexController {
  @operation({
    summary: "Get Cex",
  })
  @get()
  static getCex = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cex",
  })
  @post("{id}")
  static createCex = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
