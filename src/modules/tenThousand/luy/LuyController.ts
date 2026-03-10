import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("luy")
export default class LuyController {
  @operation({
    summary: "Get Luy",
  })
  @get()
  static getLuy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Luy",
  })
  @post("{id}")
  static createLuy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
