import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("b")
export default class BController {
  @operation({
    summary: "Get B",
  })
  @get()
  static getB = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create B",
  })
  @post("{id}")
  static createB = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
