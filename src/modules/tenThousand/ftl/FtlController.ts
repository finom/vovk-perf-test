import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ftl")
export default class FtlController {
  @operation({
    summary: "Get Ftl",
  })
  @get()
  static getFtl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ftl",
  })
  @post("{id}")
  static createFtl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
