import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fr")
export default class FrController {
  @operation({
    summary: "Get Fr",
  })
  @get()
  static getFr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fr",
  })
  @post("{id}")
  static createFr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
