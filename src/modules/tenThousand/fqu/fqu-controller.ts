import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fqu")
export default class FquController {
  @operation({
    summary: "Get Fqu",
  })
  @get()
  static getFqu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fqu",
  })
  @post("{id}")
  static createFqu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
