import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lte")
export default class LteController {
  @operation({
    summary: "Get Lte",
  })
  @get()
  static getLte = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lte",
  })
  @post("{id}")
  static createLte = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
