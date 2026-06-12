import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fkg")
export default class FkgController {
  @operation({
    summary: "Get Fkg",
  })
  @get()
  static getFkg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fkg",
  })
  @post("{id}")
  static createFkg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
