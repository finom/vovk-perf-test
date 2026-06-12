import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mmc")
export default class MmcController {
  @operation({
    summary: "Get Mmc",
  })
  @get()
  static getMmc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mmc",
  })
  @post("{id}")
  static createMmc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
