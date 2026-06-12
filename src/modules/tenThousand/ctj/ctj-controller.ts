import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ctj")
export default class CtjController {
  @operation({
    summary: "Get Ctj",
  })
  @get()
  static getCtj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ctj",
  })
  @post("{id}")
  static createCtj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
