import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("sc")
export default class ScController {
  @operation({
    summary: "Get Sc",
  })
  @get()
  static getSc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Sc",
  })
  @post("{id}")
  static createSc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
