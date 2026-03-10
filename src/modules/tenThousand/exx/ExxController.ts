import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("exx")
export default class ExxController {
  @operation({
    summary: "Get Exx",
  })
  @get()
  static getExx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Exx",
  })
  @post("{id}")
  static createExx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
