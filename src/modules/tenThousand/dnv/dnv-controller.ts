import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dnv")
export default class DnvController {
  @operation({
    summary: "Get Dnv",
  })
  @get()
  static getDnv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dnv",
  })
  @post("{id}")
  static createDnv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
