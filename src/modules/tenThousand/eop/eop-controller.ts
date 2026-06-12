import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eop")
export default class EopController {
  @operation({
    summary: "Get Eop",
  })
  @get()
  static getEop = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eop",
  })
  @post("{id}")
  static createEop = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
