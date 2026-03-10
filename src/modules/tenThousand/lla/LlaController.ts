import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lla")
export default class LlaController {
  @operation({
    summary: "Get Lla",
  })
  @get()
  static getLla = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lla",
  })
  @post("{id}")
  static createLla = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
