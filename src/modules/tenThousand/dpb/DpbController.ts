import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dpb")
export default class DpbController {
  @operation({
    summary: "Get Dpb",
  })
  @get()
  static getDpb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dpb",
  })
  @post("{id}")
  static createDpb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
