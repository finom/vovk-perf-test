import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("apc")
export default class ApcController {
  @operation({
    summary: "Get Apc",
  })
  @get()
  static getApc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Apc",
  })
  @post("{id}")
  static createApc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
