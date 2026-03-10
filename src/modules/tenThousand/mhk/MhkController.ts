import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mhk")
export default class MhkController {
  @operation({
    summary: "Get Mhk",
  })
  @get()
  static getMhk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mhk",
  })
  @post("{id}")
  static createMhk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
