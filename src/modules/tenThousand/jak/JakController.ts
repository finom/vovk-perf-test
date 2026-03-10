import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jak")
export default class JakController {
  @operation({
    summary: "Get Jak",
  })
  @get()
  static getJak = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jak",
  })
  @post("{id}")
  static createJak = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
