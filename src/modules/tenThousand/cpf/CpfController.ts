import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cpf")
export default class CpfController {
  @operation({
    summary: "Get Cpf",
  })
  @get()
  static getCpf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cpf",
  })
  @post("{id}")
  static createCpf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
