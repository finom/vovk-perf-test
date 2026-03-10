import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fje")
export default class FjeController {
  @operation({
    summary: "Get Fje",
  })
  @get()
  static getFje = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fje",
  })
  @post("{id}")
  static createFje = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
