import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jzd")
export default class JzdController {
  @operation({
    summary: "Get Jzd",
  })
  @get()
  static getJzd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jzd",
  })
  @post("{id}")
  static createJzd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
