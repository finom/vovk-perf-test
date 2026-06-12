import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dkm")
export default class DkmController {
  @operation({
    summary: "Get Dkm",
  })
  @get()
  static getDkm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dkm",
  })
  @post("{id}")
  static createDkm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
