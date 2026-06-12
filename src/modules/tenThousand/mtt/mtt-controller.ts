import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mtt")
export default class MttController {
  @operation({
    summary: "Get Mtt",
  })
  @get()
  static getMtt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mtt",
  })
  @post("{id}")
  static createMtt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
