import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nv")
export default class NvController {
  @operation({
    summary: "Get Nv",
  })
  @get()
  static getNv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nv",
  })
  @post("{id}")
  static createNv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
