import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("htd")
export default class HtdController {
  @operation({
    summary: "Get Htd",
  })
  @get()
  static getHtd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Htd",
  })
  @post("{id}")
  static createHtd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
