import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dpl")
export default class DplController {
  @operation({
    summary: "Get Dpl",
  })
  @get()
  static getDpl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dpl",
  })
  @post("{id}")
  static createDpl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
