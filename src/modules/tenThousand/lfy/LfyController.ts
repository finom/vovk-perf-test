import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lfy")
export default class LfyController {
  @operation({
    summary: "Get Lfy",
  })
  @get()
  static getLfy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lfy",
  })
  @post("{id}")
  static createLfy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
