import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("epu")
export default class EpuController {
  @operation({
    summary: "Get Epu",
  })
  @get()
  static getEpu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Epu",
  })
  @post("{id}")
  static createEpu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
