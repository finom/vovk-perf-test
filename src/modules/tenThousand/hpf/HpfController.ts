import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hpf")
export default class HpfController {
  @operation({
    summary: "Get Hpf",
  })
  @get()
  static getHpf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hpf",
  })
  @post("{id}")
  static createHpf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
