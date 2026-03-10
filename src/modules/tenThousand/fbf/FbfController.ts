import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fbf")
export default class FbfController {
  @operation({
    summary: "Get Fbf",
  })
  @get()
  static getFbf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fbf",
  })
  @post("{id}")
  static createFbf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
