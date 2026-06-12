import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jpc")
export default class JpcController {
  @operation({
    summary: "Get Jpc",
  })
  @get()
  static getJpc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jpc",
  })
  @post("{id}")
  static createJpc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
