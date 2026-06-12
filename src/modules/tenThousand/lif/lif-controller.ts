import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lif")
export default class LifController {
  @operation({
    summary: "Get Lif",
  })
  @get()
  static getLif = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lif",
  })
  @post("{id}")
  static createLif = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
