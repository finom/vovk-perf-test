import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hvm")
export default class HvmController {
  @operation({
    summary: "Get Hvm",
  })
  @get()
  static getHvm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hvm",
  })
  @post("{id}")
  static createHvm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
