import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hfr")
export default class HfrController {
  @operation({
    summary: "Get Hfr",
  })
  @get()
  static getHfr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hfr",
  })
  @post("{id}")
  static createHfr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
