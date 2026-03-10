import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ign")
export default class IgnController {
  @operation({
    summary: "Get Ign",
  })
  @get()
  static getIgn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ign",
  })
  @post("{id}")
  static createIgn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
