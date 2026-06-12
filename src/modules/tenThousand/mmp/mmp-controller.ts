import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mmp")
export default class MmpController {
  @operation({
    summary: "Get Mmp",
  })
  @get()
  static getMmp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mmp",
  })
  @post("{id}")
  static createMmp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
