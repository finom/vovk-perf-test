import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bij")
export default class BijController {
  @operation({
    summary: "Get Bij",
  })
  @get()
  static getBij = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bij",
  })
  @post("{id}")
  static createBij = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
