import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ffi")
export default class FfiController {
  @operation({
    summary: "Get Ffi",
  })
  @get()
  static getFfi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ffi",
  })
  @post("{id}")
  static createFfi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
