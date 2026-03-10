import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mld")
export default class MldController {
  @operation({
    summary: "Get Mld",
  })
  @get()
  static getMld = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mld",
  })
  @post("{id}")
  static createMld = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
