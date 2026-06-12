import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fbv")
export default class FbvController {
  @operation({
    summary: "Get Fbv",
  })
  @get()
  static getFbv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fbv",
  })
  @post("{id}")
  static createFbv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
