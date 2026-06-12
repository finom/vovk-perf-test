import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("htg")
export default class HtgController {
  @operation({
    summary: "Get Htg",
  })
  @get()
  static getHtg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Htg",
  })
  @post("{id}")
  static createHtg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
