import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jek")
export default class JekController {
  @operation({
    summary: "Get Jek",
  })
  @get()
  static getJek = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jek",
  })
  @post("{id}")
  static createJek = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
