import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dfi")
export default class DfiController {
  @operation({
    summary: "Get Dfi",
  })
  @get()
  static getDfi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dfi",
  })
  @post("{id}")
  static createDfi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
