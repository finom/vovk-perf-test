import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gbp")
export default class GbpController {
  @operation({
    summary: "Get Gbp",
  })
  @get()
  static getGbp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gbp",
  })
  @post("{id}")
  static createGbp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
