import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dnm")
export default class DnmController {
  @operation({
    summary: "Get Dnm",
  })
  @get()
  static getDnm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dnm",
  })
  @post("{id}")
  static createDnm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
