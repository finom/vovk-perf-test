import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("adg")
export default class AdgController {
  @operation({
    summary: "Get Adg",
  })
  @get()
  static getAdg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Adg",
  })
  @post("{id}")
  static createAdg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
