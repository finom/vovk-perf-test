import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dfy")
export default class DfyController {
  @operation({
    summary: "Get Dfy",
  })
  @get()
  static getDfy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dfy",
  })
  @post("{id}")
  static createDfy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
