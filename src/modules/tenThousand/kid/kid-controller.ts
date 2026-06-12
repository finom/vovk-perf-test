import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kid")
export default class KidController {
  @operation({
    summary: "Get Kid",
  })
  @get()
  static getKid = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kid",
  })
  @post("{id}")
  static createKid = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
