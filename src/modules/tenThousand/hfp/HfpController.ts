import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hfp")
export default class HfpController {
  @operation({
    summary: "Get Hfp",
  })
  @get()
  static getHfp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hfp",
  })
  @post("{id}")
  static createHfp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
