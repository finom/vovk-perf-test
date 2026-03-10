import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fgz")
export default class FgzController {
  @operation({
    summary: "Get Fgz",
  })
  @get()
  static getFgz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fgz",
  })
  @post("{id}")
  static createFgz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
