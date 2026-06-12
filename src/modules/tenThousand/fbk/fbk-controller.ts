import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fbk")
export default class FbkController {
  @operation({
    summary: "Get Fbk",
  })
  @get()
  static getFbk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fbk",
  })
  @post("{id}")
  static createFbk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
