import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jao")
export default class JaoController {
  @operation({
    summary: "Get Jao",
  })
  @get()
  static getJao = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jao",
  })
  @post("{id}")
  static createJao = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
