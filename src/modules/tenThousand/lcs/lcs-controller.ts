import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lcs")
export default class LcsController {
  @operation({
    summary: "Get Lcs",
  })
  @get()
  static getLcs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lcs",
  })
  @post("{id}")
  static createLcs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
