import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kvm")
export default class KvmController {
  @operation({
    summary: "Get Kvm",
  })
  @get()
  static getKvm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kvm",
  })
  @post("{id}")
  static createKvm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
