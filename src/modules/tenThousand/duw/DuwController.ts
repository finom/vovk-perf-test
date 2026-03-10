import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("duw")
export default class DuwController {
  @operation({
    summary: "Get Duw",
  })
  @get()
  static getDuw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Duw",
  })
  @post("{id}")
  static createDuw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
