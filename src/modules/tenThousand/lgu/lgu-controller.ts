import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lgu")
export default class LguController {
  @operation({
    summary: "Get Lgu",
  })
  @get()
  static getLgu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lgu",
  })
  @post("{id}")
  static createLgu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
