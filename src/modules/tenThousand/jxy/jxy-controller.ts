import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jxy")
export default class JxyController {
  @operation({
    summary: "Get Jxy",
  })
  @get()
  static getJxy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jxy",
  })
  @post("{id}")
  static createJxy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
