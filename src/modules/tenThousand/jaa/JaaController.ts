import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jaa")
export default class JaaController {
  @operation({
    summary: "Get Jaa",
  })
  @get()
  static getJaa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jaa",
  })
  @post("{id}")
  static createJaa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
