import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("awg")
export default class AwgController {
  @operation({
    summary: "Get Awg",
  })
  @get()
  static getAwg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Awg",
  })
  @post("{id}")
  static createAwg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
