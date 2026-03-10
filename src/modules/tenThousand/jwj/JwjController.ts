import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jwj")
export default class JwjController {
  @operation({
    summary: "Get Jwj",
  })
  @get()
  static getJwj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jwj",
  })
  @post("{id}")
  static createJwj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
