import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ltn")
export default class LtnController {
  @operation({
    summary: "Get Ltn",
  })
  @get()
  static getLtn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ltn",
  })
  @post("{id}")
  static createLtn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
