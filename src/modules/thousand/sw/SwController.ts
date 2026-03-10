import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("sw")
export default class SwController {
  @operation({
    summary: "Get Sw",
  })
  @get()
  static getSw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Sw",
  })
  @post("{id}")
  static createSw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
