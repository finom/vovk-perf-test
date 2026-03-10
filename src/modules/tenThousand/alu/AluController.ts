import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("alu")
export default class AluController {
  @operation({
    summary: "Get Alu",
  })
  @get()
  static getAlu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Alu",
  })
  @post("{id}")
  static createAlu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
