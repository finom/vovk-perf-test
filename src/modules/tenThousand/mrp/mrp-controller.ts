import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mrp")
export default class MrpController {
  @operation({
    summary: "Get Mrp",
  })
  @get()
  static getMrp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mrp",
  })
  @post("{id}")
  static createMrp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
