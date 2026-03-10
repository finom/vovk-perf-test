import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fke")
export default class FkeController {
  @operation({
    summary: "Get Fke",
  })
  @get()
  static getFke = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fke",
  })
  @post("{id}")
  static createFke = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
