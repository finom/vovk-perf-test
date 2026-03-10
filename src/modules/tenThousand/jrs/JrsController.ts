import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jrs")
export default class JrsController {
  @operation({
    summary: "Get Jrs",
  })
  @get()
  static getJrs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jrs",
  })
  @post("{id}")
  static createJrs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
