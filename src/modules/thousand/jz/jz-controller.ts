import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jz")
export default class JzController {
  @operation({
    summary: "Get Jz",
  })
  @get()
  static getJz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jz",
  })
  @post("{id}")
  static createJz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
