import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lb")
export default class LbController {
  @operation({
    summary: "Get Lb",
  })
  @get()
  static getLb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lb",
  })
  @post("{id}")
  static createLb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
