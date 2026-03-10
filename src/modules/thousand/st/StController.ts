import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("st")
export default class StController {
  @operation({
    summary: "Get St",
  })
  @get()
  static getSt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create St",
  })
  @post("{id}")
  static createSt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
