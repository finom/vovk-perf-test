import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jkg")
export default class JkgController {
  @operation({
    summary: "Get Jkg",
  })
  @get()
  static getJkg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jkg",
  })
  @post("{id}")
  static createJkg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
