import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fek")
export default class FekController {
  @operation({
    summary: "Get Fek",
  })
  @get()
  static getFek = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fek",
  })
  @post("{id}")
  static createFek = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
