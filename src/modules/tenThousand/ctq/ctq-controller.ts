import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ctq")
export default class CtqController {
  @operation({
    summary: "Get Ctq",
  })
  @get()
  static getCtq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ctq",
  })
  @post("{id}")
  static createCtq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
