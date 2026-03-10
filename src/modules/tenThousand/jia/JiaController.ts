import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jia")
export default class JiaController {
  @operation({
    summary: "Get Jia",
  })
  @get()
  static getJia = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jia",
  })
  @post("{id}")
  static createJia = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
