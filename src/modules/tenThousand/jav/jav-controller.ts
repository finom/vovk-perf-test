import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jav")
export default class JavController {
  @operation({
    summary: "Get Jav",
  })
  @get()
  static getJav = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jav",
  })
  @post("{id}")
  static createJav = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
