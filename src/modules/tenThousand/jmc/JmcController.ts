import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jmc")
export default class JmcController {
  @operation({
    summary: "Get Jmc",
  })
  @get()
  static getJmc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jmc",
  })
  @post("{id}")
  static createJmc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
