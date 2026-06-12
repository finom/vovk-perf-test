import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iwl")
export default class IwlController {
  @operation({
    summary: "Get Iwl",
  })
  @get()
  static getIwl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iwl",
  })
  @post("{id}")
  static createIwl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
