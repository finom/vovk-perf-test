import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("abb")
export default class AbbController {
  @operation({
    summary: "Get Abb",
  })
  @get()
  static getAbb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Abb",
  })
  @post("{id}")
  static createAbb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
