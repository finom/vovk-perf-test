import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ly")
export default class LyController {
  @operation({
    summary: "Get Ly",
  })
  @get()
  static getLy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ly",
  })
  @post("{id}")
  static createLy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
