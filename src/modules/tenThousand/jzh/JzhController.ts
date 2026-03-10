import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jzh")
export default class JzhController {
  @operation({
    summary: "Get Jzh",
  })
  @get()
  static getJzh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jzh",
  })
  @post("{id}")
  static createJzh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
