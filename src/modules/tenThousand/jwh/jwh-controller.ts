import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jwh")
export default class JwhController {
  @operation({
    summary: "Get Jwh",
  })
  @get()
  static getJwh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jwh",
  })
  @post("{id}")
  static createJwh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
