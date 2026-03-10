import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jan")
export default class JanController {
  @operation({
    summary: "Get Jan",
  })
  @get()
  static getJan = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jan",
  })
  @post("{id}")
  static createJan = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
