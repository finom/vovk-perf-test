import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("go")
export default class GoController {
  @operation({
    summary: "Get Go",
  })
  @get()
  static getGo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Go",
  })
  @post("{id}")
  static createGo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
