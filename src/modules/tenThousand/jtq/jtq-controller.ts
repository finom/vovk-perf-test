import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jtq")
export default class JtqController {
  @operation({
    summary: "Get Jtq",
  })
  @get()
  static getJtq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jtq",
  })
  @post("{id}")
  static createJtq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
