import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jmj")
export default class JmjController {
  @operation({
    summary: "Get Jmj",
  })
  @get()
  static getJmj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jmj",
  })
  @post("{id}")
  static createJmj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
