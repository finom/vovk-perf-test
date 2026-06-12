import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dbb")
export default class DbbController {
  @operation({
    summary: "Get Dbb",
  })
  @get()
  static getDbb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dbb",
  })
  @post("{id}")
  static createDbb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
