import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("wl")
export default class WlController {
  @operation({
    summary: "Get Wl",
  })
  @get()
  static getWl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Wl",
  })
  @post("{id}")
  static createWl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
