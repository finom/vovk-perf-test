import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mhg")
export default class MhgController {
  @operation({
    summary: "Get Mhg",
  })
  @get()
  static getMhg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mhg",
  })
  @post("{id}")
  static createMhg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
