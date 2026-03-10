import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jzp")
export default class JzpController {
  @operation({
    summary: "Get Jzp",
  })
  @get()
  static getJzp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jzp",
  })
  @post("{id}")
  static createJzp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
