import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lkm")
export default class LkmController {
  @operation({
    summary: "Get Lkm",
  })
  @get()
  static getLkm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lkm",
  })
  @post("{id}")
  static createLkm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
