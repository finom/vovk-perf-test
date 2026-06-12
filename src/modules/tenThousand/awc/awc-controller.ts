import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("awc")
export default class AwcController {
  @operation({
    summary: "Get Awc",
  })
  @get()
  static getAwc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Awc",
  })
  @post("{id}")
  static createAwc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
