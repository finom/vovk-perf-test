import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bye")
export default class ByeController {
  @operation({
    summary: "Get Bye",
  })
  @get()
  static getBye = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bye",
  })
  @post("{id}")
  static createBye = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
