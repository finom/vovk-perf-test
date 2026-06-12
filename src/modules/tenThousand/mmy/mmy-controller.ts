import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mmy")
export default class MmyController {
  @operation({
    summary: "Get Mmy",
  })
  @get()
  static getMmy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mmy",
  })
  @post("{id}")
  static createMmy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
