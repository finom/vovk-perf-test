import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("htb")
export default class HtbController {
  @operation({
    summary: "Get Htb",
  })
  @get()
  static getHtb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Htb",
  })
  @post("{id}")
  static createHtb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
