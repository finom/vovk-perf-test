import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mwc")
export default class MwcController {
  @operation({
    summary: "Get Mwc",
  })
  @get()
  static getMwc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mwc",
  })
  @post("{id}")
  static createMwc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
