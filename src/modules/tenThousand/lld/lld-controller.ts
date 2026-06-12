import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lld")
export default class LldController {
  @operation({
    summary: "Get Lld",
  })
  @get()
  static getLld = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lld",
  })
  @post("{id}")
  static createLld = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
