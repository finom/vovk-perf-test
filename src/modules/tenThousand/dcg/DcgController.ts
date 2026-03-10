import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dcg")
export default class DcgController {
  @operation({
    summary: "Get Dcg",
  })
  @get()
  static getDcg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dcg",
  })
  @post("{id}")
  static createDcg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
