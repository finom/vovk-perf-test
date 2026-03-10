import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jje")
export default class JjeController {
  @operation({
    summary: "Get Jje",
  })
  @get()
  static getJje = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jje",
  })
  @post("{id}")
  static createJje = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
