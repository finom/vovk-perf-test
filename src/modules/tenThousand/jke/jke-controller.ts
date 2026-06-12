import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jke")
export default class JkeController {
  @operation({
    summary: "Get Jke",
  })
  @get()
  static getJke = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jke",
  })
  @post("{id}")
  static createJke = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
