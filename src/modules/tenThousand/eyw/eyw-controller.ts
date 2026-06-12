import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eyw")
export default class EywController {
  @operation({
    summary: "Get Eyw",
  })
  @get()
  static getEyw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eyw",
  })
  @post("{id}")
  static createEyw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
