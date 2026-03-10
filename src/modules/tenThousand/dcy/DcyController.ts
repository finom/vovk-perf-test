import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dcy")
export default class DcyController {
  @operation({
    summary: "Get Dcy",
  })
  @get()
  static getDcy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dcy",
  })
  @post("{id}")
  static createDcy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
