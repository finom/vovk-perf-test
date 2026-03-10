import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mmd")
export default class MmdController {
  @operation({
    summary: "Get Mmd",
  })
  @get()
  static getMmd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mmd",
  })
  @post("{id}")
  static createMmd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
