import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nhl")
export default class NhlController {
  @operation({
    summary: "Get Nhl",
  })
  @get()
  static getNhl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nhl",
  })
  @post("{id}")
  static createNhl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
