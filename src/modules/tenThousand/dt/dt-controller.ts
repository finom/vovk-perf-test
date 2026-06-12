import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dt")
export default class DtController {
  @operation({
    summary: "Get Dt",
  })
  @get()
  static getDt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dt",
  })
  @post("{id}")
  static createDt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
