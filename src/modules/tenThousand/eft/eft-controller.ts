import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eft")
export default class EftController {
  @operation({
    summary: "Get Eft",
  })
  @get()
  static getEft = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eft",
  })
  @post("{id}")
  static createEft = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
