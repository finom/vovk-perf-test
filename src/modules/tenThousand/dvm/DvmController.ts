import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dvm")
export default class DvmController {
  @operation({
    summary: "Get Dvm",
  })
  @get()
  static getDvm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dvm",
  })
  @post("{id}")
  static createDvm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
