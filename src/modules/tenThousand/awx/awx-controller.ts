import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("awx")
export default class AwxController {
  @operation({
    summary: "Get Awx",
  })
  @get()
  static getAwx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Awx",
  })
  @post("{id}")
  static createAwx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
