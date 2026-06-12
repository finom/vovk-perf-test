import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ru")
export default class RuController {
  @operation({
    summary: "Get Ru",
  })
  @get()
  static getRu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ru",
  })
  @post("{id}")
  static createRu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
