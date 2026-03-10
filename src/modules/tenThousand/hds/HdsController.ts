import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hds")
export default class HdsController {
  @operation({
    summary: "Get Hds",
  })
  @get()
  static getHds = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hds",
  })
  @post("{id}")
  static createHds = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
