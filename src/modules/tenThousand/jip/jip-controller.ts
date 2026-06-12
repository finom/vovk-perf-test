import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jip")
export default class JipController {
  @operation({
    summary: "Get Jip",
  })
  @get()
  static getJip = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jip",
  })
  @post("{id}")
  static createJip = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
