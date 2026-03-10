import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jzz")
export default class JzzController {
  @operation({
    summary: "Get Jzz",
  })
  @get()
  static getJzz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jzz",
  })
  @post("{id}")
  static createJzz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
