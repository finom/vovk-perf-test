import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bon")
export default class BonController {
  @operation({
    summary: "Get Bon",
  })
  @get()
  static getBon = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bon",
  })
  @post("{id}")
  static createBon = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
