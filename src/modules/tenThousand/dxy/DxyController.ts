import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dxy")
export default class DxyController {
  @operation({
    summary: "Get Dxy",
  })
  @get()
  static getDxy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dxy",
  })
  @post("{id}")
  static createDxy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
