import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lkg")
export default class LkgController {
  @operation({
    summary: "Get Lkg",
  })
  @get()
  static getLkg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lkg",
  })
  @post("{id}")
  static createLkg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
