import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fvx")
export default class FvxController {
  @operation({
    summary: "Get Fvx",
  })
  @get()
  static getFvx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fvx",
  })
  @post("{id}")
  static createFvx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
