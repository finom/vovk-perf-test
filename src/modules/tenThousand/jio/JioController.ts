import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jio")
export default class JioController {
  @operation({
    summary: "Get Jio",
  })
  @get()
  static getJio = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jio",
  })
  @post("{id}")
  static createJio = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
