import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ffy")
export default class FfyController {
  @operation({
    summary: "Get Ffy",
  })
  @get()
  static getFfy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ffy",
  })
  @post("{id}")
  static createFfy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
