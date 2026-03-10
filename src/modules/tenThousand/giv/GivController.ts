import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("giv")
export default class GivController {
  @operation({
    summary: "Get Giv",
  })
  @get()
  static getGiv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Giv",
  })
  @post("{id}")
  static createGiv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
