import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("guv")
export default class GuvController {
  @operation({
    summary: "Get Guv",
  })
  @get()
  static getGuv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Guv",
  })
  @post("{id}")
  static createGuv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
