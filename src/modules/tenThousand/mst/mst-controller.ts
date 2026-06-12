import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mst")
export default class MstController {
  @operation({
    summary: "Get Mst",
  })
  @get()
  static getMst = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mst",
  })
  @post("{id}")
  static createMst = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
