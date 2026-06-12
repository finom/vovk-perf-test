import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fzg")
export default class FzgController {
  @operation({
    summary: "Get Fzg",
  })
  @get()
  static getFzg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fzg",
  })
  @post("{id}")
  static createFzg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
