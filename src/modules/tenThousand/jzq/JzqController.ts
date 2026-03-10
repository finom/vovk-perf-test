import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jzq")
export default class JzqController {
  @operation({
    summary: "Get Jzq",
  })
  @get()
  static getJzq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jzq",
  })
  @post("{id}")
  static createJzq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
