import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fow")
export default class FowController {
  @operation({
    summary: "Get Fow",
  })
  @get()
  static getFow = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fow",
  })
  @post("{id}")
  static createFow = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
