import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("awj")
export default class AwjController {
  @operation({
    summary: "Get Awj",
  })
  @get()
  static getAwj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Awj",
  })
  @post("{id}")
  static createAwj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
