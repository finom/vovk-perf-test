import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ckg")
export default class CkgController {
  @operation({
    summary: "Get Ckg",
  })
  @get()
  static getCkg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ckg",
  })
  @post("{id}")
  static createCkg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
