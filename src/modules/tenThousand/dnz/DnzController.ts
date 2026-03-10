import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dnz")
export default class DnzController {
  @operation({
    summary: "Get Dnz",
  })
  @get()
  static getDnz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dnz",
  })
  @post("{id}")
  static createDnz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
