import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gpf")
export default class GpfController {
  @operation({
    summary: "Get Gpf",
  })
  @get()
  static getGpf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gpf",
  })
  @post("{id}")
  static createGpf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
