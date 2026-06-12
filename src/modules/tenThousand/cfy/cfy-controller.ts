import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cfy")
export default class CfyController {
  @operation({
    summary: "Get Cfy",
  })
  @get()
  static getCfy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cfy",
  })
  @post("{id}")
  static createCfy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
