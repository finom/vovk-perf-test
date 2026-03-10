import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jha")
export default class JhaController {
  @operation({
    summary: "Get Jha",
  })
  @get()
  static getJha = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jha",
  })
  @post("{id}")
  static createJha = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
