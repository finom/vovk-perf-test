import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ghu")
export default class GhuController {
  @operation({
    summary: "Get Ghu",
  })
  @get()
  static getGhu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ghu",
  })
  @post("{id}")
  static createGhu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
