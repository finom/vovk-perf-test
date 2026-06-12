import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jim")
export default class JimController {
  @operation({
    summary: "Get Jim",
  })
  @get()
  static getJim = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jim",
  })
  @post("{id}")
  static createJim = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
