import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hcd")
export default class HcdController {
  @operation({
    summary: "Get Hcd",
  })
  @get()
  static getHcd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hcd",
  })
  @post("{id}")
  static createHcd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
