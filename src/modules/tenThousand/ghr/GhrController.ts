import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ghr")
export default class GhrController {
  @operation({
    summary: "Get Ghr",
  })
  @get()
  static getGhr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ghr",
  })
  @post("{id}")
  static createGhr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
