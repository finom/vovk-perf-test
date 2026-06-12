import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ne")
export default class NeController {
  @operation({
    summary: "Get Ne",
  })
  @get()
  static getNe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ne",
  })
  @post("{id}")
  static createNe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
