import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bdl")
export default class BdlController {
  @operation({
    summary: "Get Bdl",
  })
  @get()
  static getBdl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bdl",
  })
  @post("{id}")
  static createBdl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
