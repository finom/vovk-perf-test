import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jwn")
export default class JwnController {
  @operation({
    summary: "Get Jwn",
  })
  @get()
  static getJwn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jwn",
  })
  @post("{id}")
  static createJwn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
