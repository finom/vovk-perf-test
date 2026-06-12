import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jme")
export default class JmeController {
  @operation({
    summary: "Get Jme",
  })
  @get()
  static getJme = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jme",
  })
  @post("{id}")
  static createJme = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
