import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dnx")
export default class DnxController {
  @operation({
    summary: "Get Dnx",
  })
  @get()
  static getDnx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dnx",
  })
  @post("{id}")
  static createDnx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
