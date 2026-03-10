import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jvi")
export default class JviController {
  @operation({
    summary: "Get Jvi",
  })
  @get()
  static getJvi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jvi",
  })
  @post("{id}")
  static createJvi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
