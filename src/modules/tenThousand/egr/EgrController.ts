import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("egr")
export default class EgrController {
  @operation({
    summary: "Get Egr",
  })
  @get()
  static getEgr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Egr",
  })
  @post("{id}")
  static createEgr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
