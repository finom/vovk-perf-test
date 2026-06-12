import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dsu")
export default class DsuController {
  @operation({
    summary: "Get Dsu",
  })
  @get()
  static getDsu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dsu",
  })
  @post("{id}")
  static createDsu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
