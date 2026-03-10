import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mhz")
export default class MhzController {
  @operation({
    summary: "Get Mhz",
  })
  @get()
  static getMhz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mhz",
  })
  @post("{id}")
  static createMhz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
