import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cty")
export default class CtyController {
  @operation({
    summary: "Get Cty",
  })
  @get()
  static getCty = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cty",
  })
  @post("{id}")
  static createCty = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
