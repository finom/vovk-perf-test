import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cjt")
export default class CjtController {
  @operation({
    summary: "Get Cjt",
  })
  @get()
  static getCjt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cjt",
  })
  @post("{id}")
  static createCjt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
