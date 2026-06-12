import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cnj")
export default class CnjController {
  @operation({
    summary: "Get Cnj",
  })
  @get()
  static getCnj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cnj",
  })
  @post("{id}")
  static createCnj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
