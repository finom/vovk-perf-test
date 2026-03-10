import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jzw")
export default class JzwController {
  @operation({
    summary: "Get Jzw",
  })
  @get()
  static getJzw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jzw",
  })
  @post("{id}")
  static createJzw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
