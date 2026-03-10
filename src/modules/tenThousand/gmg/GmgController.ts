import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gmg")
export default class GmgController {
  @operation({
    summary: "Get Gmg",
  })
  @get()
  static getGmg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gmg",
  })
  @post("{id}")
  static createGmg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
