import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lfe")
export default class LfeController {
  @operation({
    summary: "Get Lfe",
  })
  @get()
  static getLfe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lfe",
  })
  @post("{id}")
  static createLfe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
