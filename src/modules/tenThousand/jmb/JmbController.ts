import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jmb")
export default class JmbController {
  @operation({
    summary: "Get Jmb",
  })
  @get()
  static getJmb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jmb",
  })
  @post("{id}")
  static createJmb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
