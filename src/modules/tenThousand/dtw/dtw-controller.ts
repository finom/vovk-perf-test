import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dtw")
export default class DtwController {
  @operation({
    summary: "Get Dtw",
  })
  @get()
  static getDtw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dtw",
  })
  @post("{id}")
  static createDtw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
