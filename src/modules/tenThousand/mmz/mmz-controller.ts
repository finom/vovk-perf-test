import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mmz")
export default class MmzController {
  @operation({
    summary: "Get Mmz",
  })
  @get()
  static getMmz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mmz",
  })
  @post("{id}")
  static createMmz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
