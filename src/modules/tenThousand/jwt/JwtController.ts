import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jwt")
export default class JwtController {
  @operation({
    summary: "Get Jwt",
  })
  @get()
  static getJwt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jwt",
  })
  @post("{id}")
  static createJwt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
