import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("awv")
export default class AwvController {
  @operation({
    summary: "Get Awv",
  })
  @get()
  static getAwv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Awv",
  })
  @post("{id}")
  static createAwv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
