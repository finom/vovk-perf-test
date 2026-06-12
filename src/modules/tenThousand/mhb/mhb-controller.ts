import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mhb")
export default class MhbController {
  @operation({
    summary: "Get Mhb",
  })
  @get()
  static getMhb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mhb",
  })
  @post("{id}")
  static createMhb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
