import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mcy")
export default class McyController {
  @operation({
    summary: "Get Mcy",
  })
  @get()
  static getMcy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mcy",
  })
  @post("{id}")
  static createMcy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
