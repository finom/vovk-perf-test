import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mnp")
export default class MnpController {
  @operation({
    summary: "Get Mnp",
  })
  @get()
  static getMnp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mnp",
  })
  @post("{id}")
  static createMnp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
