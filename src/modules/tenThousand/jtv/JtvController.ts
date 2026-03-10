import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jtv")
export default class JtvController {
  @operation({
    summary: "Get Jtv",
  })
  @get()
  static getJtv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jtv",
  })
  @post("{id}")
  static createJtv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
