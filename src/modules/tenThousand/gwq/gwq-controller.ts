import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gwq")
export default class GwqController {
  @operation({
    summary: "Get Gwq",
  })
  @get()
  static getGwq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gwq",
  })
  @post("{id}")
  static createGwq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
