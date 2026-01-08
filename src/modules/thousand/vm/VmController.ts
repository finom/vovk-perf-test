import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("vm")
export default class VmController {
  @operation({
    summary: "Get Vm",
  })
  @get()
  static getVm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vm",
  })
  @post("{id}")
  static createVm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
