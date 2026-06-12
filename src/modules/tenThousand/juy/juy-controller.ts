import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("juy")
export default class JuyController {
  @operation({
    summary: "Get Juy",
  })
  @get()
  static getJuy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Juy",
  })
  @post("{id}")
  static createJuy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
