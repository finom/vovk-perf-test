import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gpc")
export default class GpcController {
  @operation({
    summary: "Get Gpc",
  })
  @get()
  static getGpc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gpc",
  })
  @post("{id}")
  static createGpc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
