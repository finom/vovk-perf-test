import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ehz")
export default class EhzController {
  @operation({
    summary: "Get Ehz",
  })
  @get()
  static getEhz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ehz",
  })
  @post("{id}")
  static createEhz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
