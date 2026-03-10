import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mwb")
export default class MwbController {
  @operation({
    summary: "Get Mwb",
  })
  @get()
  static getMwb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mwb",
  })
  @post("{id}")
  static createMwb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
