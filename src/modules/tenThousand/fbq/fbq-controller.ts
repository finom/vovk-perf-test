import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fbq")
export default class FbqController {
  @operation({
    summary: "Get Fbq",
  })
  @get()
  static getFbq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fbq",
  })
  @post("{id}")
  static createFbq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
