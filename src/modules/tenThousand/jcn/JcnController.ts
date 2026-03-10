import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jcn")
export default class JcnController {
  @operation({
    summary: "Get Jcn",
  })
  @get()
  static getJcn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jcn",
  })
  @post("{id}")
  static createJcn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
