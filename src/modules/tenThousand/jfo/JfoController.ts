import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jfo")
export default class JfoController {
  @operation({
    summary: "Get Jfo",
  })
  @get()
  static getJfo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jfo",
  })
  @post("{id}")
  static createJfo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
