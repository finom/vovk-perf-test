import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lwb")
export default class LwbController {
  @operation({
    summary: "Get Lwb",
  })
  @get()
  static getLwb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lwb",
  })
  @post("{id}")
  static createLwb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
