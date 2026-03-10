import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dmt")
export default class DmtController {
  @operation({
    summary: "Get Dmt",
  })
  @get()
  static getDmt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dmt",
  })
  @post("{id}")
  static createDmt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
