import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dnc")
export default class DncController {
  @operation({
    summary: "Get Dnc",
  })
  @get()
  static getDnc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dnc",
  })
  @post("{id}")
  static createDnc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
