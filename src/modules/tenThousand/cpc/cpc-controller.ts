import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cpc")
export default class CpcController {
  @operation({
    summary: "Get Cpc",
  })
  @get()
  static getCpc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cpc",
  })
  @post("{id}")
  static createCpc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
