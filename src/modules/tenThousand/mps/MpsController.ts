import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mps")
export default class MpsController {
  @operation({
    summary: "Get Mps",
  })
  @get()
  static getMps = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mps",
  })
  @post("{id}")
  static createMps = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
