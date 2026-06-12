import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bds")
export default class BdsController {
  @operation({
    summary: "Get Bds",
  })
  @get()
  static getBds = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bds",
  })
  @post("{id}")
  static createBds = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
