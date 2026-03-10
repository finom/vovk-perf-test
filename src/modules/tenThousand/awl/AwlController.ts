import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("awl")
export default class AwlController {
  @operation({
    summary: "Get Awl",
  })
  @get()
  static getAwl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Awl",
  })
  @post("{id}")
  static createAwl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
