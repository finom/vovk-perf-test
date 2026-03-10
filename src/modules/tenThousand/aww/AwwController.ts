import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aww")
export default class AwwController {
  @operation({
    summary: "Get Aww",
  })
  @get()
  static getAww = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aww",
  })
  @post("{id}")
  static createAww = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
