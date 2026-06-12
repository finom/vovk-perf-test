import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jcf")
export default class JcfController {
  @operation({
    summary: "Get Jcf",
  })
  @get()
  static getJcf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jcf",
  })
  @post("{id}")
  static createJcf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
