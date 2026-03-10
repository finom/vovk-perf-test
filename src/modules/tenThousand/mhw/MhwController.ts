import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mhw")
export default class MhwController {
  @operation({
    summary: "Get Mhw",
  })
  @get()
  static getMhw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mhw",
  })
  @post("{id}")
  static createMhw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
