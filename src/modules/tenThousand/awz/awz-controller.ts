import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("awz")
export default class AwzController {
  @operation({
    summary: "Get Awz",
  })
  @get()
  static getAwz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Awz",
  })
  @post("{id}")
  static createAwz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
