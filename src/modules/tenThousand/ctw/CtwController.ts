import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ctw")
export default class CtwController {
  @operation({
    summary: "Get Ctw",
  })
  @get()
  static getCtw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ctw",
  })
  @post("{id}")
  static createCtw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
