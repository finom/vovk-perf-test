import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dan")
export default class DanController {
  @operation({
    summary: "Get Dan",
  })
  @get()
  static getDan = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dan",
  })
  @post("{id}")
  static createDan = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
