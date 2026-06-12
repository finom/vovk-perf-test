import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gmm")
export default class GmmController {
  @operation({
    summary: "Get Gmm",
  })
  @get()
  static getGmm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gmm",
  })
  @post("{id}")
  static createGmm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
