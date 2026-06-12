import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ipu")
export default class IpuController {
  @operation({
    summary: "Get Ipu",
  })
  @get()
  static getIpu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ipu",
  })
  @post("{id}")
  static createIpu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
