import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jzc")
export default class JzcController {
  @operation({
    summary: "Get Jzc",
  })
  @get()
  static getJzc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jzc",
  })
  @post("{id}")
  static createJzc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
