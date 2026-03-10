import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cda")
export default class CdaController {
  @operation({
    summary: "Get Cda",
  })
  @get()
  static getCda = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cda",
  })
  @post("{id}")
  static createCda = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
