import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mgp")
export default class MgpController {
  @operation({
    summary: "Get Mgp",
  })
  @get()
  static getMgp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mgp",
  })
  @post("{id}")
  static createMgp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
