import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lux")
export default class LuxController {
  @operation({
    summary: "Get Lux",
  })
  @get()
  static getLux = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lux",
  })
  @post("{id}")
  static createLux = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
