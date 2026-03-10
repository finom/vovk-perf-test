import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dnp")
export default class DnpController {
  @operation({
    summary: "Get Dnp",
  })
  @get()
  static getDnp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dnp",
  })
  @post("{id}")
  static createDnp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
