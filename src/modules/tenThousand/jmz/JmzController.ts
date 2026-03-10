import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jmz")
export default class JmzController {
  @operation({
    summary: "Get Jmz",
  })
  @get()
  static getJmz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jmz",
  })
  @post("{id}")
  static createJmz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
