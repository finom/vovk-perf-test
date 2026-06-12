import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("acn")
export default class AcnController {
  @operation({
    summary: "Get Acn",
  })
  @get()
  static getAcn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Acn",
  })
  @post("{id}")
  static createAcn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
