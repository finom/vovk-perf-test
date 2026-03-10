import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fzc")
export default class FzcController {
  @operation({
    summary: "Get Fzc",
  })
  @get()
  static getFzc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fzc",
  })
  @post("{id}")
  static createFzc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
