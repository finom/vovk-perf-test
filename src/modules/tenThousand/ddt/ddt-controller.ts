import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ddt")
export default class DdtController {
  @operation({
    summary: "Get Ddt",
  })
  @get()
  static getDdt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ddt",
  })
  @post("{id}")
  static createDdt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
