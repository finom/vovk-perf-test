import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hpc")
export default class HpcController {
  @operation({
    summary: "Get Hpc",
  })
  @get()
  static getHpc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hpc",
  })
  @post("{id}")
  static createHpc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
