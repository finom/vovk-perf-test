import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mfy")
export default class MfyController {
  @operation({
    summary: "Get Mfy",
  })
  @get()
  static getMfy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mfy",
  })
  @post("{id}")
  static createMfy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
