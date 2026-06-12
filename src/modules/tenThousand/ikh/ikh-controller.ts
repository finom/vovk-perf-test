import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ikh")
export default class IkhController {
  @operation({
    summary: "Get Ikh",
  })
  @get()
  static getIkh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ikh",
  })
  @post("{id}")
  static createIkh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
