import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dyg")
export default class DygController {
  @operation({
    summary: "Get Dyg",
  })
  @get()
  static getDyg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dyg",
  })
  @post("{id}")
  static createDyg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
