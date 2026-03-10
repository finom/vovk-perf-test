import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mmt")
export default class MmtController {
  @operation({
    summary: "Get Mmt",
  })
  @get()
  static getMmt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mmt",
  })
  @post("{id}")
  static createMmt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
