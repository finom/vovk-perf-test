import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hlv")
export default class HlvController {
  @operation({
    summary: "Get Hlv",
  })
  @get()
  static getHlv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hlv",
  })
  @post("{id}")
  static createHlv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
