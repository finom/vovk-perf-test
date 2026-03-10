import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("azo")
export default class AzoController {
  @operation({
    summary: "Get Azo",
  })
  @get()
  static getAzo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Azo",
  })
  @post("{id}")
  static createAzo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
