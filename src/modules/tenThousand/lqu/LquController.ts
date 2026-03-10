import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lqu")
export default class LquController {
  @operation({
    summary: "Get Lqu",
  })
  @get()
  static getLqu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lqu",
  })
  @post("{id}")
  static createLqu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
