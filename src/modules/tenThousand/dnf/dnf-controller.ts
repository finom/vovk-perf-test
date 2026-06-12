import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dnf")
export default class DnfController {
  @operation({
    summary: "Get Dnf",
  })
  @get()
  static getDnf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dnf",
  })
  @post("{id}")
  static createDnf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
