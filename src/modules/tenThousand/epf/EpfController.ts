import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("epf")
export default class EpfController {
  @operation({
    summary: "Get Epf",
  })
  @get()
  static getEpf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Epf",
  })
  @post("{id}")
  static createEpf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
