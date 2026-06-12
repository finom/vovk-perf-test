import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lwz")
export default class LwzController {
  @operation({
    summary: "Get Lwz",
  })
  @get()
  static getLwz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lwz",
  })
  @post("{id}")
  static createLwz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
