import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jgs")
export default class JgsController {
  @operation({
    summary: "Get Jgs",
  })
  @get()
  static getJgs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jgs",
  })
  @post("{id}")
  static createJgs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
