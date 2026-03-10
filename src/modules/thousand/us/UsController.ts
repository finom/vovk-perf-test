import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("us")
export default class UsController {
  @operation({
    summary: "Get Us",
  })
  @get()
  static getUs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Us",
  })
  @post("{id}")
  static createUs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
