import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jti")
export default class JtiController {
  @operation({
    summary: "Get Jti",
  })
  @get()
  static getJti = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jti",
  })
  @post("{id}")
  static createJti = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
