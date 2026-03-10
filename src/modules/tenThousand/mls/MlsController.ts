import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mls")
export default class MlsController {
  @operation({
    summary: "Get Mls",
  })
  @get()
  static getMls = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mls",
  })
  @post("{id}")
  static createMls = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
