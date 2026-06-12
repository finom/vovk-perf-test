import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fbw")
export default class FbwController {
  @operation({
    summary: "Get Fbw",
  })
  @get()
  static getFbw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fbw",
  })
  @post("{id}")
  static createFbw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
