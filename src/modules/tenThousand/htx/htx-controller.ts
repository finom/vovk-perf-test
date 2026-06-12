import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("htx")
export default class HtxController {
  @operation({
    summary: "Get Htx",
  })
  @get()
  static getHtx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Htx",
  })
  @post("{id}")
  static createHtx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
